import { ContactForm } from "@/components/ContactForm";
import { SeoHead } from "@/components/SeoHead";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact Jason James Moore | Saxophonist & Educator"
        description="Contact saxophonist and educator Jason James Moore about lessons, workshops, school programs, performances, collaborations, or other inquiries."
        path="/contact"
        ogType="website"
      />

      <section className="px-6 py-20 [@media(min-width:795px)]:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-5">
            <p className="text-sm md:text-base font-medium uppercase tracking-wide text-neutral-600">
              Get in Touch
            </p>

            <h1 className="text-5xl [@media(min-width:795px)]:text-6xl font-serif font-bold">
              Contact Me
            </h1>

            <p className="text-lg [@media(min-width:795px)]:text-xl text-neutral-700 max-w-2xl">
              Have a question, workshop, performance, collaboration, or other idea in mind? Send me a message and tell me a little about what you’re looking for.
            </p>

            <p className="text-lg text-neutral-700 max-w-2xl">
              If you&apos;re interested in private saxophone lessons and want
              to talk before getting started, you can{" "}
              <Link
                href="/consultation"
                className="underline decoration-neutral-500 underline-offset-2 hover:text-neutral-900"
              >
                schedule a free 15-minute consultation
              </Link>
              .
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}