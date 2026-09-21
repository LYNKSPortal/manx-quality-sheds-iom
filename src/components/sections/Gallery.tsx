import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const galleryImages = [
  { src: "/images/gallery/gallery-01.svg", alt: "Cedar summerhouse exterior detail", span: "row-span-2" },
  { src: "/images/gallery/gallery-02.svg", alt: "Hand built shed frame under construction", span: "" },
  { src: "/images/gallery/gallery-03.svg", alt: "Composite decking installation", span: "" },
  { src: "/images/gallery/gallery-04.svg", alt: "Feather-edge fence panel detail", span: "row-span-2" },
  { src: "/images/gallery/gallery-05.svg", alt: "Insulated garden room interior", span: "" },
  { src: "/images/gallery/gallery-06.svg", alt: "Complete garden transformation overview", span: "" },
];

export function Gallery() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title="A closer look at recent builds"
            description="A selection of hand built garden buildings, decking and fencing from across the Isle of Man."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 auto-rows-[160px] gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.05}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
