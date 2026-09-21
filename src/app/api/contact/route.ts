import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { siteConfig } from "@/lib/site-config";

// Keep any external email/notification integration fully configurable via
// environment variables - never hardcode credentials here. See .env.example.
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || siteConfig.email;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const CONTACT_FORM_WEBHOOK_URL = process.env.CONTACT_FORM_WEBHOOK_URL;

const MAX_FILES = 5;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB per file
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid form submission." },
      { status: 400 }
    );
  }

  const raw = Object.fromEntries(formData.entries());

  // Normalise empty optional fields so zod's `.optional()` accepts them.
  const normalised = {
    ...raw,
    dimensions: raw.dimensions ? String(raw.dimensions) : undefined,
    budget: raw.budget ? String(raw.budget) : undefined,
  };

  const parsed = contactFormSchema.safeParse(normalised);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields and try again.",
        errors: parsed.data ? undefined : parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Honeypot check - if filled in, silently pretend success to waste bot time.
  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  const images = formData
    .getAll("images")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (images.length > MAX_FILES) {
    return NextResponse.json(
      { success: false, message: `Please attach a maximum of ${MAX_FILES} images.` },
      { status: 400 }
    );
  }

  for (const image of images) {
    if (image.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { success: false, message: `"${image.name}" is larger than the 5MB limit.` },
        { status: 400 }
      );
    }
    if (image.type && !ALLOWED_IMAGE_TYPES.includes(image.type)) {
      return NextResponse.json(
        { success: false, message: `"${image.name}" is not a supported image type.` },
        { status: 400 }
      );
    }
  }

  const { data } = parsed;

  try {
    if (RESEND_API_KEY && CONTACT_FROM_EMAIL) {
      await sendViaResend(data, images);
    } else if (CONTACT_FORM_WEBHOOK_URL) {
      await sendViaWebhook(data);
    } else {
      // No email/notification integration configured yet. Log server-side so
      // the enquiry isn't lost during local development, and let the owner
      // know via the README how to configure a real integration.
      console.info("[contact form] No email integration configured. Submission:", {
        ...data,
        attachedImages: images.map((f) => f.name),
      });
    }
  } catch (error) {
    console.error("[contact form] Failed to deliver enquiry", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong sending your enquiry. Please call or email us directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

async function sendViaResend(
  data: Awaited<ReturnType<typeof contactFormSchema.parseAsync>>,
  images: File[]
) {
  const attachments = await Promise.all(
    images.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
    }))
  );

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: data.email,
      subject: `New quote request: ${data.service} (${data.location})`,
      text: formatPlainText(data),
      attachments: attachments.length ? attachments : undefined,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend API responded with status ${res.status}`);
  }
}

async function sendViaWebhook(data: Awaited<ReturnType<typeof contactFormSchema.parseAsync>>) {
  const res = await fetch(CONTACT_FORM_WEBHOOK_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Contact form webhook responded with status ${res.status}`);
  }
}

function formatPlainText(data: Awaited<ReturnType<typeof contactFormSchema.parseAsync>>) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service required: ${data.service}`,
    `Approximate dimensions: ${data.dimensions || "Not provided"}`,
    `Location: ${data.location}`,
    `Desired timeframe: ${data.timeframe}`,
    `Budget range: ${data.budget || "Not provided"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}
