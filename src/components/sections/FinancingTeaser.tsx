import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FinancingTeaser() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-charcoal/10 bg-cream px-8 py-14 text-center sm:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Financing
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
            Spreading the cost of your bespoke build
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal-soft sm:text-base">
            We understand a bespoke garden building or full transformation is a significant
            investment. Get in touch to talk through the options available for your project.
          </p>
          <div className="mt-8">
            <Button href="/financing" variant="secondary">
              Learn About Financing
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
