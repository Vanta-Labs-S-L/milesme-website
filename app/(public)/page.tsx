import { NavNew } from "@/components/NavNew";
import { HeroNew } from "@/components/HeroNew";
import { HowItWorksNew } from "@/components/HowItWorksNew";
import { FeaturesNew } from "@/components/FeaturesNew";
import { WaitlistNew } from "@/components/WaitlistNew";
import { FooterNew } from "@/components/FooterNew";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <NavNew />
      <main>
        <HeroNew />
        <HowItWorksNew />
        <ScrollReveal>
          <FeaturesNew />
        </ScrollReveal>
        <ScrollReveal>
          <WaitlistNew />
        </ScrollReveal>
      </main>
      <FooterNew />
    </>
  );
}
