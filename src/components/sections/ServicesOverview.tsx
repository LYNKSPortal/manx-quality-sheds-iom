import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesOverview() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Bespoke outdoor buildings, made to measure"
          description="From a single hand built shed to a complete garden transformation, every project starts with a conversation about your space and how you want to use it."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} delay={index * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}
