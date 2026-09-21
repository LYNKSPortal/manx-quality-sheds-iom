import { Award, Hammer, House, MapPin, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: Users, label: "Family Run" },
  { icon: Hammer, label: "Bespoke & Hand Built" },
  { icon: MapPin, label: "Local Isle of Man Business" },
  { icon: House, label: "Quality Materials" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-charcoal/10 bg-white">
      <Container className="py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:justify-between">
          {points.map((point, index) => (
            <Reveal key={point.label} delay={index * 0.05} as="li">
              <div className="flex items-center gap-2.5 text-charcoal-soft">
                <point.icon className="size-4 text-forest" aria-hidden="true" />
                <span className="text-sm font-medium">{point.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
