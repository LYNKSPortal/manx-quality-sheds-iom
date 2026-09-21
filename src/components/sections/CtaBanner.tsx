import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-28">
      <Image
        src="/images/misc/quote-cta-background.svg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-charcoal/60" aria-hidden="true" />
      <Container className="relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to start your bespoke build?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Tell us about your garden and we&apos;ll get back to you with a free, no-obligation
            quote.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get a Free Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
