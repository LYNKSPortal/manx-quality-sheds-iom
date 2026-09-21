import type { Metadata } from "next";
import Image from "next/image";
import { Award, Hammer, HeartHandshake, Ruler } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Manx Quality Sheds is a family-run business based in Douglas, Isle of Man, with over 20 years of experience building bespoke sheds, summer houses and garden rooms.",
  path: "/about",
});

const values = [
  {
    icon: Hammer,
    title: "Hand Built Craftsmanship",
    description:
      "Every structure is built by hand, using proper joinery rather than mass-produced flat-pack panels.",
  },
  {
    icon: Award,
    title: "20+ Years of Experience",
    description:
      "Two decades of building for Isle of Man gardens has taught us what genuinely holds up to local conditions.",
  },
  {
    icon: Ruler,
    title: "Made-to-Measure",
    description:
      "We design around your garden's actual shape, access and orientation, not a fixed set of catalogue sizes.",
  },
  {
    icon: HeartHandshake,
    title: "Personal, Family Service",
    description:
      "As a family-run team, you deal with the same people from your first enquiry through to handover.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A local, family-run business built on craftsmanship"
        description="Manx Quality Sheds has spent more than 20 years designing and hand building bespoke outdoor spaces for gardens across the Isle of Man."
        image="/images/hero/about-hero.svg"
        imageAlt="Manx Quality Sheds team building a bespoke garden structure"
      />

      <section className="bg-background py-24 sm:py-32">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built on genuine craftsmanship, not shortcuts"
            />
            <Reveal delay={0.12}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
                <p>
                  Manx Quality Sheds is a family-run business based at 5 Rosemount, Douglas,
                  with over 20 years of experience designing and building bespoke outdoor
                  structures for customers across the Isle of Man.
                </p>
                <p>
                  What started as a focus on hand built sheds has grown into a full range of
                  bespoke garden buildings and outdoor living spaces &mdash; summer houses,
                  fully insulated garden rooms, decking, fencing, and complete garden
                  transformations &mdash; but the approach has stayed the same throughout: listen
                  to what a customer actually needs, design around their specific garden, and
                  build it properly.
                </p>
                <p>
                  As a family-run team, we take pride in being a genuinely local Isle of Man
                  business. We understand the island&apos;s weather, gardens and planning
                  considerations, and we&apos;re proud to have built a following of over 3,200
                  people on Facebook who follow our projects as they come together.
                </p>
                <p>
                  Every project, whether it&apos;s a single garden shed or a full garden
                  transformation, gets the same level of care and hands-on attention from our
                  team, start to finish.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/about/craftsmanship-detail.svg"
              alt="Handcrafted timber joinery detail on a Manx Quality Sheds build"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values behind every build"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 0.06}
                className="rounded-3xl border border-charcoal/10 bg-white p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <value.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-charcoal">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
