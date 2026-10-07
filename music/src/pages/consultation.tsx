import { SeoHead } from "@/components/SeoHead";

export default function ConsultationPage() {
  return (
    <>
      <SeoHead
        title="Free Saxophone Consultation | Jason James Moore"
        description="Schedule a free 15-minute consultation to discuss saxophone lessons with Jason James Moore, online or in person in Wilmington, NC."
        path="/consultation"
        ogType="website"
      />

      <section className="px-6 py-20 [@media(min-width:795px)]:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-y-12 lg:gap-x-12">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 max-w-xl space-y-8 text-center lg:text-left">
            <div className="space-y-4"> 
              <p className="text-sm md:text-base font-medium uppercase tracking-wide text-neutral-600">
                Free 15-Minute Consultation
              </p>
              <h1 className="text-5xl [@media(min-width:795px)]:text-6xl font-serif font-bold">
                Let&apos;s Talk About Saxophone Lessons
              </h1>
              <p className="text-lg text-neutral-700">
                This is a short, informal conversation about what you&apos;re
                working on, what you&apos;d like to improve, and whether
                studying together feels like a good fit.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-800">
                  What We&apos;ll Talk About
              </h2>
              <ul className="space-y-3 text-lg text-neutral-700 list-disc pl-5">
                  <li>Your playing experience and musical goals</li>
                  <li>What you&apos;d like help with right now</li>
                  <li>Lesson format, scheduling, and next steps</li>
              </ul>
            </div>

            <p className="text-lg text-neutral-700">
              Beginners are welcome, and you don&apos;t need to prepare
              anything before we talk. Choose a time that works for you and
              we&apos;ll start there.
            </p>
          </div>

          {/* Right: TidyCal Embed */}
          <div className="w-full lg:w-1/2 max-w-xl overflow-hidden">
            <iframe
              src="https://tidycal.com/moorejasonj/15-minute-meeting"
              title="Schedule a saxophone lesson consultation"
              className="w-full h-[925px] border-0"
              scrolling="no"
            />
          </div>
        </div>
      </section>
    </>
  );
}
