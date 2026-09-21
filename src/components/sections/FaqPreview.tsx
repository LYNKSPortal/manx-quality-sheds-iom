import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data/faqs";

export function FaqPreview() {
  const preview = faqs.slice(0, 5);

  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers to common questions"
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.1} className="mt-12">
          <Accordion items={preview} />
        </Reveal>
        <Reveal delay={0.16} className="mt-10 flex justify-center">
          <Button href="/faqs" variant="secondary">
            View All FAQs
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
