import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-charcoal">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/25"
        aria-hidden="true"
      />
      <Container className="relative z-10 pb-16 pt-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
