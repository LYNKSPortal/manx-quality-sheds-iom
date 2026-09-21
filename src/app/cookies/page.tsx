import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Information about how Manx Quality Sheds uses cookies on this website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Cookie Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-charcoal-soft sm:text-base">
          <p>
            This Cookie Policy is a placeholder and should be reviewed and confirmed by the
            business owner before the site goes live, particularly if analytics, advertising or
            other third-party cookies are added in future.
          </p>
          <h2 className="text-lg font-semibold text-charcoal">What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device that help websites function and
            can be used to remember preferences or gather usage information.
          </p>
          <h2 className="text-lg font-semibold text-charcoal">Cookies on This Site</h2>
          <p>
            This website is built to run with minimal essential cookies required for core
            functionality. If analytics or marketing cookies are introduced in future, this
            policy will be updated to describe them and, where required, a cookie consent banner
            will be added.
          </p>
          <h2 className="text-lg font-semibold text-charcoal">Contact Us</h2>
          <p>
            If you have any questions about this policy, please contact us at{" "}
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
