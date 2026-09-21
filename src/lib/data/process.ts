export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us Your Idea",
    description:
      "Get in touch and tell us what you have in mind — a new shed, a garden room, decking, fencing, or a full garden transformation. We'll arrange a chat or visit to understand your garden and your goals.",
  },
  {
    number: "02",
    title: "Design & Quote",
    description:
      "We put together a bespoke design and quote tailored to your space, budget and how you want to use it — no fixed catalogue sizes, no guesswork.",
  },
  {
    number: "03",
    title: "Hand Built",
    description:
      "Our team hand builds your project on the Isle of Man, using quality materials and proper craftsmanship at every stage, from groundworks through to the finishing touches.",
  },
  {
    number: "04",
    title: "Enjoy Your New Space",
    description:
      "We hand over a finished space built specifically for you — ready to enjoy, whether that's a summer evening in a new garden room or storage that finally works for your garden.",
  },
];
