import { HeroSection } from "@/components/hero-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { SocialProof } from "@/components/social-proof";
import { FAQSection } from "@/components/faq-section";
import { FooterSection } from "@/components/footer-section";
import { AnimatedSection } from "@/components/animated-section";
import { SectionedFeatures } from "@/components/sectioned-features";
import { InstallGuideSection } from "@/components/install-guide-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0 pt-20">
      <div className="relative z-10">
        <main className="  relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-200px] md:bottom-[-470px] left-1/2 transform -translate-x-1/2">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[150px] md:mt-[380px]"
          delay={0.1}
        >
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection
          id="features-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-28"
          delay={0.2}
        >
          <SectionedFeatures />
        </AnimatedSection>
        <AnimatedSection
          id="install-guide-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-16 md:mt-24"
          delay={0.2}
        >
          <InstallGuideSection />
        </AnimatedSection>
        {/* <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <LargeTestimonial />
        </AnimatedSection> */}
        {/* <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <PricingSection />
        </AnimatedSection> */}
        {/* <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection> */}
        <AnimatedSection
          id="faq-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-16 md:mt-24"
          delay={0.2}
        >
          <FAQSection />
        </AnimatedSection>
        {/* <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <CTASection />
        </AnimatedSection> */}
        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto "
          delay={0.2}
        >
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  );
}
