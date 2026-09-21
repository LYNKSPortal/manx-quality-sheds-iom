export type FaqCategory =
  | "General"
  | "Design & Sizing"
  | "Materials & Insulation"
  | "Build Process"
  | "Isle of Man Service"
  | "Finance & Quotes";

export type Faq = {
  question: string;
  answer: string;
  category: FaqCategory;
};

// Central FAQ content. Edit answers here to keep them consistent
// across the FAQ page and homepage preview.
export const faqs: Faq[] = [
  {
    category: "Design & Sizing",
    question: "Can you build to a bespoke or unusual size?",
    answer:
      "Yes — every project is designed around your garden and how you want to use it, rather than a fixed catalogue size. We'll take measurements and talk through your requirements before designing your build.",
  },
  {
    category: "Design & Sizing",
    question: "Do I get to choose the design and layout?",
    answer:
      "Absolutely. We talk through your ideas, garden layout and budget, then design a bespoke solution around that — from door and window positions to internal layout.",
  },
  {
    category: "Materials & Insulation",
    question: "Are your garden rooms and summer houses insulated?",
    answer:
      "Insulation can be included depending on how you plan to use the space. Our garden rooms are commonly fully insulated, plasterboarded and skimmed for year-round use — let us know your plans and we'll advise on the right build-up.",
  },
  {
    category: "Materials & Insulation",
    question: "What materials do you build with?",
    answer:
      "We use quality timber suited to the Isle of Man climate, including options like Western Red Cedar cladding for a premium, natural finish. We're happy to talk through material choices and their relative cost and maintenance for your project.",
  },
  {
    category: "Materials & Insulation",
    question: "What decking and fencing materials are available?",
    answer:
      "We can discuss both timber and composite decking, along with a range of fencing styles, to suit your budget, garden style and maintenance preferences when we quote your project.",
  },
  {
    category: "Build Process",
    question: "What does the build process involve, from start to finish?",
    answer:
      "It starts with a conversation about your idea, followed by a design and quote, then the hand-built construction itself, finishing with a handover so you can start enjoying your new space. See our process section for more detail.",
  },
  {
    category: "Build Process",
    question: "How much site preparation is needed before you start?",
    answer:
      "This varies by project and site. We'll assess ground conditions, access and any groundworks required as part of our initial visit and quote, so there are no surprises once the build begins.",
  },
  {
    category: "Build Process",
    question: "How long does a typical project take to complete?",
    answer:
      "Timescales depend on the size and complexity of the build, as well as weather and material lead times. We'll give you a realistic timescale as part of your design and quote — we don't believe in vague promises.",
  },
  {
    category: "Build Process",
    question: "Will my new garden building or decking need maintenance?",
    answer:
      "As with any timber structure, some ongoing maintenance (such as periodic treatment or cleaning) helps protect your investment long-term. We're happy to advise on sensible maintenance for the specific materials used in your project.",
  },
  {
    category: "Isle of Man Service",
    question: "Do you cover the whole Isle of Man?",
    answer:
      "Yes, we're based in Douglas and carry out bespoke builds across the Isle of Man.",
  },
  {
    category: "Isle of Man Service",
    question: "Do I need planning permission for a garden building?",
    answer:
      "This depends on the size, position and intended use of the structure. We can talk through general considerations for your specific project, though we'd always recommend checking directly with the relevant Isle of Man planning authority for anything unusual or larger scale.",
  },
  {
    category: "Finance & Quotes",
    question: "How do I get a quote?",
    answer:
      "Simply get in touch via our contact form, phone or email with a few details about what you're looking for. We'll arrange a visit or discussion, then provide a bespoke design and quote for your project.",
  },
  {
    category: "Finance & Quotes",
    question: "Is finance available for larger projects?",
    answer:
      "We understand bespoke garden buildings are a significant investment. Visit our Financing page for more information, and get in touch to discuss options for your specific project.",
  },
  {
    category: "General",
    question: "Are you a local, family-run business?",
    answer:
      "Yes — Manx Quality Sheds is a family-run business based in Douglas, with over 20 years of experience building bespoke outdoor structures for customers across the Isle of Man.",
  },
];

export const faqCategories: FaqCategory[] = [
  "General",
  "Design & Sizing",
  "Materials & Insulation",
  "Build Process",
  "Isle of Man Service",
  "Finance & Quotes",
];
