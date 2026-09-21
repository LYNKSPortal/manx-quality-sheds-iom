import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What Customers Say"
          title="Trusted by gardens across the Isle of Man"
          description="Sample placeholder testimonials shown below — to be replaced with genuine customer reviews."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name + index}
              delay={index * 0.08}
              className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white p-8"
            >
              <Quote className="size-6 text-forest/40" aria-hidden="true" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-soft">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-charcoal">{testimonial.name}</p>
                <p className="text-xs text-charcoal-soft">{testimonial.location}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-forest/70">
                  Placeholder Review
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
