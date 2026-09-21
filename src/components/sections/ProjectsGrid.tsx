"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projectCategories, projects, type ProjectCategory } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {projectCategories.map((category) => {
          const isActive = activeCategory === category.value;
          return (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest",
                isActive
                  ? "border-forest bg-forest text-white"
                  : "border-charcoal/15 text-charcoal-soft hover:border-forest/40 hover:text-forest"
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.isDemo && (
                  <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
                    Demo Project
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-base font-semibold tracking-tight text-charcoal">
                  {project.title}
                </h3>
                <p className="text-sm text-charcoal-soft">{project.location}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
                  View Project
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
