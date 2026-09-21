import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceIconMap } from "@/lib/service-icons";
import type { Service } from "@/lib/data/services";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = serviceIconMap[service.icon];

  return (
    <Reveal delay={delay} className="group h-full">
      <Link
        href={`/services/${service.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={service.coverImage}
            alt={`${service.title} by Manx Quality Sheds`}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-forest">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-charcoal">{service.title}</h3>
          <p className="flex-1 text-sm leading-relaxed text-charcoal-soft">
            {service.shortDescription}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
            Learn more
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
