import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, considered process from idea to handover"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08} className="relative">
              <span className="text-5xl font-semibold tracking-tight text-forest/15">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
