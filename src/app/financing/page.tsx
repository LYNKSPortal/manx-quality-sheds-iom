import type { Metadata } from "next";
import { Landmark, PiggyBank, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Financing",
  description:
    "Information on financing and payment options for bespoke garden buildings from Manx Quality Sheds. Get in touch to discuss what's available for your project.",
  path: "/financing",
});

const points = [
  {
    icon: Wallet,
    title: "Spreading the Cost",
    description:
      "A bespoke garden room, summer house or full transformation is a meaningful investment. We're happy to talk through ways to spread the cost of your project.",
  },
  {
    icon: Landmark,
    title: "Discussed at Quote Stage",
    description:
      "Once we understand the scope of your project, we can talk through the payment structure and any financing options available at that point.",
  },
  {
    icon: PiggyBank,
    title: "No Pressure, No Surprises",
    description:
      "We believe in being upfront about costs from the start, so you can make the right decision for your household without any pressure.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Making your bespoke project achievable"
        description="We understand that a bespoke garden building is a significant investment. This page will be updated with full financing details as they're confirmed — for now, get in touch and we'll talk through what's currently available."
        image="/images/hero/financing-hero.svg"
        imageAlt="Garden room build in progress"
      />

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="How Financing Works"
            title="Flexible ways to fund your project"
            description="This section is intentionally kept general — specific lenders, rates and eligibility criteria will be added here once confirmed by the business. Please contact us directly for the most up-to-date information."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {points.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="rounded-3xl border border-charcoal/10 bg-cream p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <point.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-charcoal">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 rounded-3xl border border-charcoal/10 bg-charcoal px-8 py-12 text-center sm:px-16">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Want to discuss financing for your project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Contact us with a few details about your project and we&apos;ll talk through the
              options available to help make it happen.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg">
                Enquire Now
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
