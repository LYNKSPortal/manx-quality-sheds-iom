import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/sections/PageHero";
import { faqCategories, faqs } from "@/lib/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about bespoke sizes, materials, insulation, the build process, Isle of Man coverage, timescales and financing at Manx Quality Sheds.",
  path: "/faqs",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Everything you need to know about bespoke sizing, materials, insulation, our build process, Isle of Man coverage and financing."
        image="/images/hero/faqs-hero.svg"
        imageAlt="Manx Quality Sheds garden building detail"
      />

      <section className="bg-background py-24 sm:py-32">
        <Container className="max-w-3xl">
          {faqCategories.map((category, categoryIndex) => {
            const categoryFaqs = faqs.filter((faq) => faq.category === category);
            if (categoryFaqs.length === 0) return null;

            return (
              <div key={category} className={categoryIndex > 0 ? "mt-14" : ""}>
                <Reveal>
                  <h2 className="text-xl font-semibold tracking-tight text-charcoal">
                    {category}
                  </h2>
                </Reveal>
                <Reveal delay={0.08} className="mt-4">
                  <Accordion items={categoryFaqs} />
                </Reveal>
              </div>
            );
          })}

          <Reveal delay={0.1} className="mt-16 rounded-3xl border border-charcoal/10 bg-cream px-8 py-10 text-center">
            <h2 className="text-xl font-semibold tracking-tight text-charcoal">
              Still have a question?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-charcoal-soft">
              Get in touch and we&apos;ll be happy to help with anything specific to your
              project.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
