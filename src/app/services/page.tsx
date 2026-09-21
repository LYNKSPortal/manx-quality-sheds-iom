import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Bespoke sheds, summer houses, garden rooms, decking, fencing and full garden transformations, hand built across the Isle of Man by Manx Quality Sheds.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Bespoke outdoor buildings, built for your garden"
        description="From a single storage shed to a complete garden transformation, every project is designed and hand built around how you want to use your space."
        image="/images/hero/services-hero.svg"
        imageAlt="Manx Quality Sheds bespoke garden building"
      />

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Six ways we help transform Isle of Man gardens"
            description="Explore each service below for more detail on materials, benefits and example applications."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} delay={index * 0.06} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
