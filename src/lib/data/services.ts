export type ServiceIcon =
  | "shed"
  | "summerhouse"
  | "garden-room"
  | "decking"
  | "fencing"
  | "transformation";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  shortDescription: string;
  description: string[];
  benefits: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  coverImage: string;
  detailImages: string[];
};

export const services: Service[] = [
  {
    slug: "bespoke-sheds",
    icon: "shed",
    title: "Bespoke Sheds",
    shortDescription:
      "Hand built, made-to-measure sheds designed around your garden and how you actually want to use it.",
    description: [
      "Every shed we build starts with a conversation about how you want to use the space, not a catalogue size. Whether it's a workshop, log store, bike shed or simple garden storage, we design and build to fit your plot and your needs.",
      "Built using quality timber and proper joinery rather than flat-pack panels, our sheds are built to stand up to Isle of Man weather and last for years, not seasons.",
    ],
    benefits: [
      "Made-to-measure sizing rather than fixed catalogue dimensions",
      "Quality timber construction, built by hand on the Isle of Man",
      "Configurable doors, windows and internal layout",
      "Built to suit exposed or sheltered garden positions",
    ],
    applications: [
      "Workshops and hobby spaces",
      "Log stores and general garden storage",
      "Bike and equipment sheds",
      "Bin and utility stores",
    ],
    faqs: [
      {
        question: "Can a shed be built to an unusual size or awkward space?",
        answer:
          "Yes — because every shed is hand built rather than assembled from a fixed panel size, we can design around tight side passages, sloped plots and other awkward garden layouts.",
      },
      {
        question: "What timber do you use for sheds?",
        answer:
          "We use quality timber suited to the Isle of Man climate. We're happy to talk through cladding and timber options for your specific project when we visit or quote.",
      },
    ],
    coverImage: "/images/services/bespoke-sheds/cover.svg",
    detailImages: [
      "/images/services/bespoke-sheds/detail-1.svg",
      "/images/services/bespoke-sheds/detail-2.svg",
    ],
  },
  {
    slug: "summer-houses",
    icon: "summerhouse",
    title: "Summer Houses",
    shortDescription:
      "Beautifully finished summer houses designed to be enjoyed all year round, not just in summer.",
    description: [
      "Our summer houses are designed as genuine outdoor living spaces — somewhere to sit with a coffee, entertain guests or simply enjoy the garden from, whatever the Manx weather is doing.",
      "We can incorporate features like hidden storage, verandas and larger glazing, all built around the specific shape and orientation of your garden.",
    ],
    benefits: [
      "Designed to make the most of light and garden views",
      "Can incorporate hidden storage or a shed within the design",
      "Finished internally for comfortable year-round use",
      "Quality cladding options, including cedar",
    ],
    applications: [
      "Garden seating and entertaining spaces",
      "Reading rooms and quiet retreats",
      "Combined summer house and hidden storage",
      "Garden bar or entertaining hub",
    ],
    faqs: [
      {
        question: "Can a summer house include hidden storage?",
        answer:
          "Yes — one of our recent builds was a 3m x 5m summer house with a hidden shed built into the design, giving extra storage without compromising the main living space.",
      },
      {
        question: "Are summer houses insulated?",
        answer:
          "Insulation can be included depending on how you intend to use the space. Let us know your plans and we'll advise on the right build-up for your budget.",
      },
    ],
    coverImage: "/images/services/summer-houses/cover.svg",
    detailImages: [
      "/images/services/summer-houses/detail-1.svg",
      "/images/services/summer-houses/detail-2.svg",
    ],
  },
  {
    slug: "garden-rooms",
    icon: "garden-room",
    title: "Garden Rooms",
    shortDescription:
      "Fully insulated, plasterboarded and skimmed garden rooms built for genuine year-round use.",
    description: [
      "For customers wanting a true extension of their living space, our garden rooms are fully insulated, plasterboarded and skimmed internally, ready to decorate and furnish as an office, gym, studio or extra living area.",
      "We handle the build from groundworks and structure through to a finished, usable interior, built specifically for the space available.",
    ],
    benefits: [
      "Fully insulated for year-round comfort",
      "Plasterboarded and skimmed internally",
      "Suitable for home offices, gyms, studios and living space",
      "Built to suit your garden's size, access and orientation",
    ],
    applications: [
      "Home offices and studios",
      "Home gyms",
      "Guest and hobby rooms",
      "Additional living space",
    ],
    faqs: [
      {
        question: "Are garden rooms suitable for working from home?",
        answer:
          "Yes — with full insulation and a finished, plastered interior, our garden rooms are built to be comfortable and usable throughout the year, making them well suited to home offices and studios.",
      },
      {
        question: "Do garden rooms need planning permission?",
        answer:
          "This depends on the size, position and use of the building. We're happy to talk through general considerations for your specific project when we visit, though we'd always recommend checking with the relevant Isle of Man authority for anything unusual.",
      },
    ],
    coverImage: "/images/services/garden-rooms/cover.svg",
    detailImages: [
      "/images/services/garden-rooms/detail-1.svg",
      "/images/services/garden-rooms/detail-2.svg",
    ],
  },
  {
    slug: "decking",
    icon: "decking",
    title: "Decking",
    shortDescription:
      "Hand built decking designed to tie your garden together and extend your outdoor living space.",
    description: [
      "A well-built deck changes how a garden is used, creating a level, usable space for furniture, entertaining or simply enjoying the outdoors. We design and build decking to suit your garden's levels, drainage and the way you'll use it.",
      "From simple platforms to multi-level decking connecting different parts of a garden, each project is built specifically for the site.",
    ],
    benefits: [
      "Built to suit sloped, uneven or multi-level gardens",
      "Material options to suit different budgets and finishes",
      "Designed to integrate with existing garden features",
      "Solid, hand built construction",
    ],
    applications: [
      "Entertaining and dining areas",
      "Poolside or hot tub surrounds",
      "Raised platforms for sloped gardens",
      "Walkways connecting garden buildings",
    ],
    faqs: [
      {
        question: "Can decking be built on a sloped garden?",
        answer:
          "Yes — decking is often one of the best ways to create a level, usable space on a sloped or uneven garden. We'll assess the site and design a suitable substructure.",
      },
      {
        question: "What decking materials do you offer?",
        answer:
          "We can discuss timber and composite decking options and their relative maintenance and cost when we quote your project.",
      },
    ],
    coverImage: "/images/services/decking/cover.svg",
    detailImages: [
      "/images/services/decking/detail-1.svg",
      "/images/services/decking/detail-2.svg",
    ],
  },
  {
    slug: "fencing",
    icon: "fencing",
    title: "Fencing",
    shortDescription:
      "Quality fencing built for privacy, security and shelter, finished to match the rest of your garden.",
    description: [
      "Good fencing does more than mark a boundary — it provides privacy, shelter from Manx weather and a finished backdrop for the rest of the garden. We install fencing built to last, matched to your garden style and site conditions.",
      "As with all our work, fencing is installed by hand with attention to level, line and long-term stability, not just speed.",
    ],
    benefits: [
      "Built for privacy, shelter and security",
      "Styles to suit contemporary or traditional gardens",
      "Installed with attention to ground conditions and stability",
      "Can be paired with decking or garden transformation projects",
    ],
    applications: [
      "Boundary and privacy fencing",
      "Wind shelter for exposed gardens",
      "Pet and child-safe garden enclosures",
      "Screening for garden rooms and seating areas",
    ],
    faqs: [
      {
        question: "Can fencing help with exposed, windy gardens?",
        answer:
          "Yes — fencing height, style and panel choice can all be adjusted to provide better shelter for exposed sites, which is a common consideration on the Isle of Man.",
      },
      {
        question: "Do you replace old fencing as well as install new?",
        answer:
          "Yes, we handle removal of old fencing as part of a fencing or garden transformation project.",
      },
    ],
    coverImage: "/images/services/fencing/cover.svg",
    detailImages: [
      "/images/services/fencing/detail-1.svg",
      "/images/services/fencing/detail-2.svg",
    ],
  },
  {
    slug: "garden-transformations",
    icon: "transformation",
    title: "Full Garden Transformations",
    shortDescription:
      "End-to-end garden transformations bringing sheds, garden rooms, decking and fencing together as one project.",
    description: [
      "Many of our customers come to us wanting to rethink their whole garden rather than a single structure. We plan and build complete transformations — combining garden rooms, decking, fencing and landscaping into one cohesive, hand built project.",
      "Working with one team from initial idea through to completion keeps the whole project consistent in quality and design, rather than piecing together separate trades.",
    ],
    benefits: [
      "One team managing the whole project, start to finish",
      "Cohesive design across structures, decking and fencing",
      "Made-to-measure to suit the specific garden and household",
      "Built and finished to the same quality standard throughout",
    ],
    applications: [
      "Full rear garden makeovers",
      "Combined garden room, decking and fencing projects",
      "Multi-phase transformations for larger plots",
      "Gardens being reimagined for a house sale or new use",
    ],
    faqs: [
      {
        question: "Can you manage a whole garden project, not just one structure?",
        answer:
          "Yes — full garden transformations combining multiple elements such as a garden room, decking and fencing are one of the areas we specialise in.",
      },
      {
        question: "How long does a full garden transformation take?",
        answer:
          "This depends heavily on the scope of the project. We'll give you a realistic timescale as part of your design and quote.",
      },
    ],
    coverImage: "/images/services/garden-transformations/cover.svg",
    detailImages: [
      "/images/services/garden-transformations/detail-1.svg",
      "/images/services/garden-transformations/detail-2.svg",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
