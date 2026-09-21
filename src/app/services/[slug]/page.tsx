import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getServiceBySlug, services } from "@/lib/data/services";
import { serviceIconMap } from "@/lib/service-icons";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.coverImage,
  });
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIconMap[service.icon];

  return (
    <>
      <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-charcoal">
        <Image
          src={service.coverImage}
          alt={`${service.title} by Manx Quality Sheds`}
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
          <Reveal className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white">
            <Icon className="size-6" aria-hidden="true" />
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {service.shortDescription}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal className="space-y-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-charcoal">
                Key Benefits
              </h2>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-charcoal-soft sm:text-base">
                    <Check className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16} className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-charcoal">
                Example Applications
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.applications.map((application) => (
                  <li
                    key={application}
                    className="rounded-xl bg-cream px-4 py-3 text-sm text-charcoal-soft"
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22} className="mt-12">
              <Button href="/contact" size="lg">
                Get a Free Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            {service.detailImages.map((image) => (
              <Reveal key={image} className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  alt={`${service.title} example by Manx Quality Sheds`}
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              {service.title} &mdash; Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Accordion items={service.faqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
