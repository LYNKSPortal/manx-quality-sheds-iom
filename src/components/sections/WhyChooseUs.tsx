import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/data/why-choose-us";

export function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Manx Quality Sheds?"
          title="Built by a team that genuinely cares about the details"
          align="center"
          theme="dark"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06} className="border-t border-white/15 pt-6">
              <p className="text-base font-semibold text-white">{point.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
