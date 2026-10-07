import { SeoHead } from "@/components/SeoHead";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Script from "next/script";

export default function LessonsPage() {
  return (
    <>
      <SeoHead
        title="Saxophone Lessons | Online & In Person with Jason James Moore"
        description="Private saxophone lessons, monthly mentorship, and group classes focused on sound, technique, improvisation, musicianship, and practical progress."
        path="/saxophone-lessons"
        ogType="website"
      />

      <section className="px-6 py-20 md:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left text content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-md uppercase tracking-[0.2em] text-neutral-600">
                Practice With Me
              </p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold">
                Saxophone Lessons
              </h1>
            </div>
            <p className="text-lg">
              I offer saxophone lessons online and in person for students who want a thoughtful, practical approach to improving as musicians.
              If you’re in Wilmington, NC, you can also study with me in person at my home studio. Saxophone lessons with me can help you:
            </p>
            <ul className="list-disc list-inside text-lg text-neutral-700 space-y-1">
              <li>
                Develop a stronger, more consistent <strong>sound</strong> with greater ease.
              </li>
              <li>
                Build <strong>technique</strong> that supports the music you want to play.
              </li>
              <li>
                Improve <strong>improvisation</strong>, <strong>ear training</strong>, and <strong>musical vocabulary</strong>.
              </li>
              <li>
                Understand <strong>harmony and theory</strong> through direct, <strong>practical musical experience</strong>.
              </li>
              <li>
                Build practice processes that lead to meaningful progress.
              </li>
            </ul>
            <Button
              asChild
              className="h-9 inline-flex items-center rounded-md bg-amber-200/70 px-4 py-2 text-lg font-medium text-black hover:bg-amber-200 shadow-lg border border-neutral-900/15"
            >
              <Link href="#schedule">
                Schedule Lessons
              </Link>
            </Button>
          </div>

          {/* Right image */}
          <div className="w-full flex justify-center overflow-hidden">
            <Image
              src="/JasonBW.jpeg"
              alt="Jason James Moore playing saxophone"
              className="rounded-lg shadow-lg object-cover max-w-sm w-full"
              width={903}
              height={1208}
            />
          </div>
        </div>

          {/* Offering Cards */}
            
            <div className="mt-16 max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ways to Work Together</h2>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="h-full bg-white/70">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Private Saxophone Lessons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700 leading-relaxed">
                      Recurring one-on-one lessons shaped around your playing, musical goals, and the work you’re doing between sessions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full bg-white/70">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Monthly Mentorship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700 leading-relaxed">
                      One 60-minute lesson followed by a personalized month-long practice plan, with supporting videos, charts, and explanations as needed, plus text & email communication along the way.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full bg-white/70">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Group Classes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700 leading-relaxed">
                      Workshops and recurring classes for school programs, studios, and ensembles, designed with directors and section leaders around topics like improvisation, musicianship, saxophone technique, and ensemble skills.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div> 


      <section className="mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Can Work On
          </h2>
          <p className="text-md text-neutral-600 mb-6 leading-relaxed">
            Lessons can draw from a wide range of technical, musical, and creative topics depending on your goals. I generally approach these ideas through sound and musical experience first, using theory and technique to describe, support, and expand what you can already hear and feel.
          </p>

          {/* Put a link here later like "Read More about how I approach teaching" */}
          

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-l border-neutral-300 pl-5 py-2">
              <h3 className="text-xl font-bold mb-3">
                Sound & Technique
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>Tone production</li>
                <li>Breathing</li>
                <li>Embouchure and air support</li>
                <li>Scale studies</li>
                <li>Classical saxophone literature</li>
              </ul>
            </div>

            <div className="border-l border-neutral-300 pl-5 py-2">
              <h3 className="text-xl font-bold mb-3">
                Improvisation & Musicianship
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>Improvisation</li>
                <li>Groove</li>
                <li>Ear training</li>
                <li>Transcription</li>
                <li>Developing personal vocabulary</li>
              </ul>
            </div>

            <div className="border-l border-neutral-300 pl-5 py-2">
              <h3 className="text-xl font-bold mb-3">
                Harmony, Theory & Repertoire
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>Learning and memorizing songs and chord progressions</li>
                <li>Diatonic harmony</li>
                <li>Playing over drones for harmonic context</li>
                <li>Music theory through sound first</li>
                <li>Writing solo etudes over jazz standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="schedule" className="mt-24 max-w-5xl mx-auto border-t border-neutral-300 pt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Saxophone Lessons
        </h2>

        <p className="text-lg text-neutral-700 mb-2">
          Ready to get started? Choose private lessons or monthly mentorship below.
          If you’re not sure which option is the right fit, you can{" "}
          <Link
            href="/consultation"
            className="underline underline-offset-2 hover:text-neutral-900"
          >
            schedule a free consultation
          </Link>{" "}
          first.
        </p>

        <p className="text-lg text-neutral-700 mb-8">
          For group classes, school programs, or workshops,{" "} 
          <Link
            href="/contact"
            className="underline underline-offset-2 hover:text-neutral-900"
          >
            contact me directly
          </Link>{" "}
          so we can talk about your group and goals.
        </p>

        {/* Scheduler Embed */}
        <div className="mt-10">
          <div
            className="tidycal-embed"
            data-path="moorejasonj"
          />

          <Script
            src="https://asset-tidycal.b-cdn.net/js/embed.js"
            strategy="afterInteractive"
          />
        </div>
      </section>
    </section>
    </>
  );
}
