import { Hero } from "@/components/Hero";
import { SeoHead } from "@/components/SeoHead";
// import Layout from "@/components/Layout";
import BioSection from "@/components/sections/BioSection";
import OfferSection from "@/components/sections/OfferSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Saxophone Lessons Online & Wilmington NC | Jason James Moore"
        description="Private and group saxophone lessons in Wilmington, NC or online. Experienced instruction, mentoring, and customized plans. Book your consultation today!"
        path="/"
        ogType="website"
      />
      <Hero />
      <section className="bg-gradient-to-b from-white via-indigo-50 to-indigo-100 text-foreground">
        <BioSection />
        <TestimonialSection />
      </section>
      <OfferSection />
    </>
  );
}
