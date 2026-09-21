export type ProjectCategory =
  | "summer-houses"
  | "garden-rooms"
  | "sheds"
  | "decking"
  | "fencing"
  | "garden-transformations";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  dimensions: string;
  materials: string[];
  features: string[];
  description: string[];
  coverImage: string;
  gallery: string[];
  /**
   * Real, confirmed project details supplied by the business.
   * Demo projects (isDemo: true) use clearly-labelled placeholder
   * information and should be replaced with real project data and
   * photography as it becomes available.
   */
  isDemo: boolean;
};

export const projects: Project[] = [
  {
    slug: "cedar-summerhouse",
    title: "3m x 5m Western Red Cedar Summerhouse & Hidden Shed",
    category: "summer-houses",
    location: "Isle of Man",
    dimensions: "3m x 5m",
    materials: ["Western Red Cedar cladding", "Insulated frame", "Plasterboard & skim finish"],
    features: [
      "Hidden shed built into the design for extra storage",
      "Fully insulated for year-round use",
      "Plasterboarded and skimmed interior",
      "Western Red Cedar exterior cladding",
    ],
    description: [
      "This 3m x 5m summerhouse combines a beautifully finished garden room with a hidden shed, giving the customer generous outdoor storage without it being on show.",
      "Finished in Western Red Cedar, the building is fully insulated and finished internally with plasterboard and skim, so it can be used comfortably as a genuine year-round garden room rather than a seasonal summer space.",
    ],
    coverImage: "/images/projects/cedar-summerhouse/cover.svg",
    gallery: [
      "/images/projects/cedar-summerhouse/gallery-1.svg",
      "/images/projects/cedar-summerhouse/gallery-2.svg",
      "/images/projects/cedar-summerhouse/gallery-3.svg",
      "/images/projects/cedar-summerhouse/gallery-4.svg",
    ],
    isDemo: false,
  },
  {
    slug: "garden-room-onchan",
    title: "Insulated Garden Room (Demo Project)",
    category: "garden-rooms",
    location: "Onchan, Isle of Man (demo location)",
    dimensions: "4m x 3m (demo dimensions)",
    materials: ["Timber frame (demo)", "Composite cladding (demo)"],
    features: [
      "Fully insulated (demo)",
      "Home office layout (demo)",
      "Double glazed windows (demo)",
    ],
    description: [
      "This project entry uses placeholder demo information to illustrate how an insulated garden room build is presented on the site. Replace with a genuine project write-up and photography when available.",
    ],
    coverImage: "/images/projects/garden-room-onchan/cover.svg",
    gallery: [
      "/images/projects/garden-room-onchan/gallery-1.svg",
      "/images/projects/garden-room-onchan/gallery-2.svg",
    ],
    isDemo: true,
  },
  {
    slug: "timber-deck-douglas",
    title: "Multi-Level Timber Deck (Demo Project)",
    category: "decking",
    location: "Douglas, Isle of Man (demo location)",
    dimensions: "Approx. 30m² (demo dimensions)",
    materials: ["Pressure-treated timber (demo)"],
    features: ["Multi-level design (demo)", "Integrated steps (demo)", "Glass balustrade (demo)"],
    description: [
      "Placeholder demo entry showing how a decking project is presented, including dimensions, materials and features. Replace with real project details once supplied.",
    ],
    coverImage: "/images/projects/timber-deck-douglas/cover.svg",
    gallery: [
      "/images/projects/timber-deck-douglas/gallery-1.svg",
      "/images/projects/timber-deck-douglas/gallery-2.svg",
    ],
    isDemo: true,
  },
  {
    slug: "fencing-castletown",
    title: "Feather-Edge Boundary Fencing (Demo Project)",
    category: "fencing",
    location: "Castletown, Isle of Man (demo location)",
    dimensions: "Approx. 45 linear metres (demo dimensions)",
    materials: ["Feather-edge timber panels (demo)", "Concrete posts (demo)"],
    features: ["Full boundary replacement (demo)", "Increased privacy & shelter (demo)"],
    description: [
      "Placeholder demo entry illustrating a fencing project layout. Replace with real project details and photography once supplied.",
    ],
    coverImage: "/images/projects/fencing-castletown/cover.svg",
    gallery: [
      "/images/projects/fencing-castletown/gallery-1.svg",
      "/images/projects/fencing-castletown/gallery-2.svg",
    ],
    isDemo: true,
  },
  {
    slug: "shed-peel",
    title: "Bespoke Workshop Shed (Demo Project)",
    category: "sheds",
    location: "Peel, Isle of Man (demo location)",
    dimensions: "3.5m x 2.4m (demo dimensions)",
    materials: ["Timber cladding (demo)", "Felt roof (demo)"],
    features: ["Made-to-measure sizing (demo)", "Workshop fit-out (demo)"],
    description: [
      "Placeholder demo entry showing a bespoke shed build. Replace with real project details and photography once supplied.",
    ],
    coverImage: "/images/projects/shed-peel/cover.svg",
    gallery: [
      "/images/projects/shed-peel/gallery-1.svg",
      "/images/projects/shed-peel/gallery-2.svg",
    ],
    isDemo: true,
  },
  {
    slug: "garden-transformation-ramsey",
    title: "Full Garden Transformation (Demo Project)",
    category: "garden-transformations",
    location: "Ramsey, Isle of Man (demo location)",
    dimensions: "Whole rear garden (demo)",
    materials: ["Garden room (demo)", "Composite decking (demo)", "Feather-edge fencing (demo)"],
    features: [
      "Combined garden room, decking and fencing (demo)",
      "Full landscaping (demo)",
    ],
    description: [
      "Placeholder demo entry showing how a complete, multi-element garden transformation is presented. Replace with real project details and photography once supplied.",
    ],
    coverImage: "/images/projects/garden-transformation-ramsey/cover.svg",
    gallery: [
      "/images/projects/garden-transformation-ramsey/gallery-1.svg",
      "/images/projects/garden-transformation-ramsey/gallery-2.svg",
    ],
    isDemo: true,
  },
  {
    slug: "summerhouse-laxey",
    title: "Garden Summer House (Demo Project)",
    category: "summer-houses",
    location: "Laxey, Isle of Man (demo location)",
    dimensions: "3m x 4m (demo dimensions)",
    materials: ["Timber cladding (demo)", "Double glazed doors (demo)"],
    features: ["Veranda (demo)", "Garden entertaining space (demo)"],
    description: [
      "Placeholder demo entry showing a summer house build. Replace with real project details and photography once supplied.",
    ],
    coverImage: "/images/projects/summerhouse-laxey/cover.svg",
    gallery: [
      "/images/projects/summerhouse-laxey/gallery-1.svg",
      "/images/projects/summerhouse-laxey/gallery-2.svg",
    ],
    isDemo: true,
  },
];

export const projectCategories: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All Projects", value: "all" },
  { label: "Summer Houses", value: "summer-houses" },
  { label: "Garden Rooms", value: "garden-rooms" },
  { label: "Sheds", value: "sheds" },
  { label: "Decking", value: "decking" },
  { label: "Fencing", value: "fencing" },
  { label: "Garden Transformations", value: "garden-transformations" },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProject = projects[0];
