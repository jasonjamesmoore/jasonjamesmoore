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
        title="Jason James Moore | Saxophonist, Composer & Educator"
        description="Jason James Moore is a saxophonist, composer, and educator based in Wilmington, NC. Explore his music, teaching, and saxophone lessons online or in person."
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
