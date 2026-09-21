import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AboutIntro() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/about/family-workshop.svg"
            alt="Manx Quality Sheds family-run workshop on the Isle of Man"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              About Manx Quality Sheds
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              A family-run business built on genuine local craftsmanship
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
              For more than 20 years, we&apos;ve been designing and hand building bespoke sheds,
              summer houses, garden rooms, decking and fencing for customers right across the
              Isle of Man. As a family-run team, every project gets the same personal attention,
              from the first conversation through to the final finish.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base leading-relaxed text-charcoal-soft sm:text-lg">
              We don&apos;t work from a fixed catalogue. Every build is made-to-measure, using
              quality materials chosen to stand up to local conditions &mdash; because it&apos;s
              built specifically for your garden, not somebody else&apos;s.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
