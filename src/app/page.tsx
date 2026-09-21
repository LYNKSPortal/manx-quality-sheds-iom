import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinancingTeaser } from "@/components/sections/FinancingTeaser";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutIntro />
      <ServicesOverview />
      <FeaturedProject />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinancingTeaser />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
