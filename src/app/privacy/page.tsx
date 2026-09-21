import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Manx Quality Sheds collects, uses and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-charcoal-soft sm:text-base">
          <p>
            This Privacy Policy is a placeholder outlining how {siteConfig.name} intends to
            handle personal information submitted through this website, such as via our contact
            and quote request form. It should be reviewed and confirmed by the business owner
            before the site goes live, and updated to reflect actual data handling practices.
          </p>
          <h2 className="text-lg font-semibold text-charcoal">Information We Collect</h2>
          <p>
            When you submit an enquiry through our contact form, we collect the information you
            provide, such as your name, email address, phone number, project details and any
            images you choose to attach.
          </p>
          <h2 className="text-lg font-semibold text-charcoal">How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to your enquiry, prepare a quote, and
            communicate with you about your project. We do not sell your personal information to
            third parties.
          </p>
          <h2 className="text-lg font-semibold text-charcoal">Contact Us</h2>
          <p>
            If you have any questions about this policy or how your information is handled,
            please contact us at{" "}
            <a href={siteConfig.emailHref} className="font-medium text-forest underline underline-offset-4">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
