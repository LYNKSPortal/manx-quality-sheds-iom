import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "A portfolio of bespoke sheds, summer houses, garden rooms, decking, fencing and garden transformations built by Manx Quality Sheds across the Isle of Man.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A portfolio of bespoke, hand built projects"
        description="Browse recent builds across the Isle of Man, including our featured Western Red Cedar summerhouse. Some entries below use clearly labelled demo data pending real project details."
        image="/images/hero/projects-hero.svg"
        imageAlt="Manx Quality Sheds completed garden project"
      />

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
