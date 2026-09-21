"use client";

import { useRef, useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Upload, X } from "lucide-react";
import {
  budgetOptions,
  contactFormSchema,
  serviceOptions,
  timeframeOptions,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_FILES = 5;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    setFiles((prev) => [...prev, ...selected].slice(0, MAX_FILES));
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());

    const parsed = contactFormSchema.safeParse({
      ...values,
      dimensions: values.dimensions || undefined,
      budget: values.budget || undefined,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setServerMessage("Please check the highlighted fields below.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage(null);

    files.forEach((file) => formData.append("images", file));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (!res.ok || !result.success) {
        setStatus("error");
        setServerMessage(
          result.message || "Something went wrong. Please try again or contact us directly."
        );
        return;
      }

      setStatus("success");
      formRef.current.reset();
      setFiles([]);
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong. Please try again or contact us directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl border border-forest/20 bg-forest/5 px-8 py-14 text-center"
      >
        <CircleCheck className="size-10 text-forest" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-charcoal">Thank you &mdash; enquiry sent</h3>
        <p className="max-w-md text-sm leading-relaxed text-charcoal-soft">
          We&apos;ve received your enquiry and will be in touch as soon as possible. If it&apos;s
          urgent, feel free to call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-forest underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field - hidden from sighted users, left empty by real visitors */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && serverMessage && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {serverMessage}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClasses(Boolean(errors.name))}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses(Boolean(errors.email))}
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClasses(Boolean(errors.phone))}
          />
        </Field>
        <Field label="Service Required" htmlFor="service" error={errors.service}>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={inputClasses(Boolean(errors.service))}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Approximate Dimensions / Project Details"
          htmlFor="dimensions"
          error={errors.dimensions}
          className="sm:col-span-2"
        >
          <input
            id="dimensions"
            name="dimensions"
            type="text"
            placeholder="e.g. approx. 4m x 3m garden room"
            className={inputClasses(Boolean(errors.dimensions))}
          />
        </Field>
        <Field label="Location" htmlFor="location" error={errors.location}>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Douglas, Isle of Man"
            required
            className={inputClasses(Boolean(errors.location))}
          />
        </Field>
        <Field label="Desired Timeframe" htmlFor="timeframe" error={errors.timeframe}>
          <select
            id="timeframe"
            name="timeframe"
            required
            defaultValue=""
            className={inputClasses(Boolean(errors.timeframe))}
          >
            <option value="" disabled>
              Select a timeframe
            </option>
            {timeframeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Budget Range (optional)"
          htmlFor="budget"
          error={errors.budget}
          className="sm:col-span-2"
        >
          <select id="budget" name="budget" defaultValue="" className={inputClasses(false)}>
            <option value="">Prefer not to say / not sure yet</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Tell Us About Your Project"
          htmlFor="message"
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your garden, what you have in mind, and anything else that would help us quote accurately."
            className={inputClasses(Boolean(errors.message))}
          />
        </Field>
      </div>

      <div>
        <span className="block text-sm font-medium text-charcoal">
          Reference Images (optional)
        </span>
        <label
          htmlFor="image-upload"
          className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-charcoal/25 bg-cream px-6 py-8 text-center transition-colors hover:border-forest/50"
        >
          <Upload className="size-5 text-forest" aria-hidden="true" />
          <span className="text-sm font-medium text-charcoal">
            Click to upload photos of your garden or inspiration
          </span>
          <span className="text-xs text-charcoal-soft">
            Up to {MAX_FILES} images, 5MB max each (JPG, PNG, WEBP, HEIC)
          </span>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/heic"
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {files.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center gap-2 rounded-full bg-cream px-3 py-1.5 text-xs text-charcoal-soft"
              >
                {file.name}
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  aria-label={`Remove ${file.name}`}
                  className="text-charcoal-soft hover:text-forest"
                >
                  <X className="size-3.5" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-forest px-8 text-base font-medium text-white transition-all duration-200 hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && (
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
        )}
        {status === "submitting" ? "Sending your enquiry..." : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p className="mt-1.5 text-xs text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-soft/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest",
    hasError ? "border-red-400" : "border-charcoal/15"
  );
}
