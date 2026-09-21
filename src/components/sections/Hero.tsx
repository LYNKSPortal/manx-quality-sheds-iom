import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-charcoal">
      <Image
        src="/images/hero/home-hero.svg"
        alt="Bespoke Western Red Cedar garden room and summerhouse built by Manx Quality Sheds on the Isle of Man"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20"
        aria-hidden="true"
      />
      <Container className="relative z-10 pb-20 pt-40 sm:pb-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Family Run &middot; Isle of Man &middot; 20+ Years Experience
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Bespoke Outdoor Spaces. Built on the Isle of Man.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            For over 20 years, our family-run team has hand built sheds, summer houses, garden
            rooms, decking and fencing for gardens across the Isle of Man &mdash; designed around
            you, built to last.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get a Free Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="/projects" size="lg" variant="ghost">
              Explore Our Work
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
