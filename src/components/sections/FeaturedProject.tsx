import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { featuredProject } from "@/lib/data/projects";

export function FeaturedProject() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl order-1 lg:order-2">
            <Image
              src={featuredProject.coverImage}
              alt={featuredProject.title}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Featured Project
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
                {featuredProject.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
                {featuredProject.description[0]}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <ul className="mt-6 space-y-3">
                {featuredProject.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-charcoal-soft sm:text-base">
                    <Check className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Button href={`/projects/${featuredProject.slug}`} variant="secondary">
                  View Full Project
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
