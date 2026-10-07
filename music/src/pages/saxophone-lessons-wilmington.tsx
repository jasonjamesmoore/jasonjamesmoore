import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ParkingCircle } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent,
} from "@/components/ui/card";

type SectionProps = {
  id?: string;
};

export default function SaxophoneLessonsWilmington({ id }: SectionProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://music.jasonjamesmoore.com/saxophone-lessons-wilmington",
    name: "Jason James Moore - Saxophone Lessons Wilmington NC",
    description:
      "Private saxophone lessons in Wilmington, NC at Northchase studio. Expert instruction for all ages and skill levels.",
    image: "https://music.jasonjamesmoore.com/JasonBW.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wilmington",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Wilmington", state: "NC" },
      { "@type": "City", name: "Wrightsville Beach", state: "NC" },
      { "@type": "City", name: "Carolina Beach", state: "NC" },
      { "@type": "AdministrativeArea", name: "New Hanover County, NC" },
      { "@type": "AdministrativeArea", name: "Pender County, NC" },
    ],
    serviceType: "Saxophone Lessons",
    offers: {
      "@type": "Offer",
      name: "Private Saxophone Lessons - In-Studio",
      priceCurrency: "USD",
      description:
        "1-on-1 private saxophone lessons at studio in Wilmington, NC",
    },
  };

  const faqItems = [
    {
      value: "where",
      trigger: "Where are your saxophone lessons held?",
      content: "My studio is in the Northchase area of Wilmington, NC. The location is convenient for students coming from Porters Neck, Mayfaire, Landfall, northern New Hanover County, and nearby communities in southern Pender County.",
    },
    {
      value: "whomst",
      trigger: "Who do you teach?",
      content: "I work with saxophone students at a range of ages and experience levels, from developing players to more experienced musicians who want to strengthen their sound, technique, improvisation, musicianship, or practice process.",
    },
    {
      value: "group-classes",
      trigger: "Do you offer group classes or workshops?",
      content: "Yes. I’m available for group classes, workshops, sectionals, and other saxophone or musicianship instruction for schools, studios, ensembles, and other local programs.",
    },
    {
      value: "surrounding-areas",
      trigger: "Do you teach students from Wrightsville Beach or the surrounding area?",
      content: "Yes. Students from Wrightsville Beach, Carolina Beach, and other parts of the Wilmington area are welcome at my Northchase studio.",
    },
    {
      value: "online",
      trigger: "Do you offer online lessons for students outside Wilmington?",
      content: (
        <>
          Yes. If you’re outside the Wilmington area, I also teach online
          saxophone lessons via Zoom. You can learn more on my{" "}
          <Link
            href="/saxophone-lessons"
            className="text-amber-600 hover:text-amber-700 underline"
          >
            saxophone lessons page
          </Link>.
        </>
      ),
    },
  ];
  return (
    <>
      <SeoHead
        title="Saxophone Lessons Wilmington NC | Private In-Studio Instruction"
        description="Private in-studio saxophone lessons in Wilmington, NC at my Northchase home studio. Personalized instruction for beginners through experienced players."
        path="/saxophone-lessons-wilmington"
        ogType="website"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <section className="bg-gradient-to-b from-white via-indigo-50 to-indigo-100 text-foreground pb-8">
        <div className="pt-20 px-6 md:px-12">
        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          {/* Left text content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl text-center font-serif font-bold">
              Saxophone Lessons in Wilmington, NC
            </h1>
            <div className="flex justify-center gap-2">
              <Link
                href="/consultation"
                className="inline-block bg-amber-200/70 text-slate-700 hover:bg-amber-200 font-bold py-3 px-6 rounded-lg transition text-2xl"
              >
                Schedule a Consultation
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm md:text-base font-medium text-neutral-600">
              <span>Private In-Studio Lessons</span>
              <span aria-hidden="true">•</span>
              <span>Group Classes & Workshops</span>
            </div>
            <p className="text-lg">
              I teach private saxophone lessons at my home studio in the Northchase area of Wilmington, NC. We work directly with your sound, technique, musicianship, and practice so each lesson stays connected to the music you want to play.
            </p>
          </div>

          {/* Right image */}
          <div className="w-full flex justify-center overflow-hidden">
            <Image
              src="/JasonBW.jpeg"
              alt="Jason James Moore playing saxophone in Wilmington NC studio"
              className="rounded-lg shadow-lg object-cover max-w-sm w-full"
              width={903}
              height={1208}
            />
          </div>
        </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-8 bg-indigo-100">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />
      </div>

      {/* Why In-Studio Lessons */}
      <section
        id={id}
        className="py-20 px-6 bg-gradient-to-b from-indigo-100 via-rose-100 to-white text-black [@media(min-width:795px)]:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl [@media(min-width:795px)]:text-5xl font-bold text-center mb-16">
            Why Choose In-Studio Lessons in Wilmington?
          </h2>
          <div className="grid gap-8 [@media(min-width:795px)]:grid-cols-3 ">
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-4">
              <h3 className="text-xl [@media(min-width:795px)]:text-2xl font-bold">
                Direct, In-Room Feedback
              </h3>
              <p className="text-md [@media(min-width:795px)]:text-lg text-neutral-700">
                Working together in the same room makes it easy to address tone, articulation, breathing, posture, and technique as you play. I can
                demonstrate concepts on my instrument and respond directly to what I'm hearing and seeing.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-4">
              <h3 className="text-xl [@media(min-width:795px)]:text-2xl font-bold">
                Dedicated Studio Space
              </h3>
              <p className="text-md [@media(min-width:795px)]:text-lg text-neutral-700">
                Lessons take place in a dedicated home studio in the Northchase area, with a comfortable environment for playing, listening, and working through musical ideas together.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-4">
              <h3 className="text-xl [@media(min-width:795px)]:text-2xl font-bold">
                Convenient Wilmington Location
              </h3>
              <p className="text-md [@media(min-width:795px)]:text-lg text-neutral-700">
                My studio is in the Northchase area, with convenient access from Wilmington and nearby communities in northern New Hanover and southern Pender counties.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-6xl mx-auto h-px bg-neutral-300" />
        </div>
        {/* Studio Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">
          <div className="flex flex-col gap-3 items-center text-center">
            <MapPin className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Studio Location</h3>
              <p className="text-muted-foreground">
                Northchase area <br />
                Wilmington, NC
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <Clock className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-muted-foreground">
                By appointment
                <br />
                Flexible scheduling
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <ParkingCircle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Parking</h3>
              <p className="text-muted-foreground">
                Easy on-site parking
              </p>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-16 max-w-5xl mx-auto h-px bg-neutral-300" />
        <div className="my-20 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Interested in In-Studio Saxophone Lessons?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to talk about your goals, availability, and whether lessons at my Wilmington studio are a good fit.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-amber-200/70 text-slate-700 hover:bg-amber-200 text-2xl font-bold py-3 px-6 rounded-lg transition"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <h2 className="text-3xl [@media(min-width:795px)]:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>


          <Card className="w-full">
            <CardContent>
              <Accordion type="single" collapsible defaultValue="where">
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
