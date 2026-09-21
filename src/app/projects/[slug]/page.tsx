import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Ruler } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.description[0],
    path: `/projects/${project.slug}`,
    image: project.coverImage,
  });
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-charcoal">
        <Image
          src={project.coverImage}
          alt={project.title}
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
          {project.isDemo && (
            <Reveal>
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
                Demo Project &mdash; Placeholder Details
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-5 flex flex-wrap gap-6 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Ruler className="size-4" aria-hidden="true" />
                {project.dimensions}
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal className="space-y-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-charcoal">Materials</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.materials.map((material) => (
                  <li
                    key={material}
                    className="rounded-full bg-cream px-4 py-2 text-sm text-charcoal-soft"
                  >
                    {material}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16} className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-charcoal">Features</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-charcoal-soft sm:text-base">
                    <Check className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22} className="mt-12">
              <Button href="/contact" size="lg">
                Start a Similar Project
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            {project.gallery.map((image) => (
              <Reveal
                key={image}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  alt={`${project.title} gallery image`}
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
