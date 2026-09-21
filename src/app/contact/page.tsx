import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Free Quote",
  description:
    "Get in touch with Manx Quality Sheds for a free, no-obligation quote on your bespoke shed, summer house, garden room, decking, fencing or garden transformation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get a free, no-obligation quote"
        description="Tell us about your project and we'll be in touch to arrange a chat or a visit to your garden."
        image="/images/hero/contact-hero.svg"
        imageAlt="Manx Quality Sheds contact"
      />

      <section className="bg-background py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal">
                Speak to the team
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-6 space-y-5">
              <a
                href={siteConfig.phoneHref}
                className="flex items-start gap-3 rounded-2xl border border-charcoal/10 bg-cream p-5 transition-colors hover:border-forest/40"
              >
                <Phone className="mt-0.5 size-5 text-forest" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Call or text</p>
                  <p className="text-sm text-charcoal-soft">{siteConfig.phone}</p>
                </div>
              </a>
              <a
                href={siteConfig.emailHref}
                className="flex items-start gap-3 rounded-2xl border border-charcoal/10 bg-cream p-5 transition-colors hover:border-forest/40"
              >
                <Mail className="mt-0.5 size-5 text-forest" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Email</p>
                  <p className="text-sm text-charcoal-soft">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-charcoal/10 bg-cream p-5">
                <MapPin className="mt-0.5 size-5 text-forest" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Based in</p>
                  <p className="text-sm text-charcoal-soft">{siteConfig.address.full}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16} className="mt-8 rounded-2xl border border-charcoal/10 bg-white p-5">
              <p className="text-sm leading-relaxed text-charcoal-soft">
                Proudly serving customers across the Isle of Man. Follow our latest projects on
                Facebook at{" "}
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest underline underline-offset-4"
                >
                  @{siteConfig.social.facebookHandle}
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="rounded-3xl border border-charcoal/10 bg-white p-6 sm:p-10">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
