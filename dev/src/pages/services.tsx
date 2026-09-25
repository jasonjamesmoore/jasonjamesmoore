import Link from "next/link";
import { ContactPageLayout } from "@/components/ContactPageLayout";

const serviceTracks = [
  {
    title: "Build",
    description:
      "New internal tools, workflow software, dashboards, and focused applications built around how your business actually operates.",
  },
  {
    title: "Extend",
    description:
      "Add features, integrations, reporting, billing, admin workflows, or other capabilities to software you already use.",
  },
  {
    title: "Stabilize",
    description:
      "Take over inherited or troublesome software, diagnose production issues, and make it easier to operate and keep improving.",
  },
];

const inheritedSystemFocus = [
  "Inherited applications with uneven architecture",
  "Manual workflows that should be automated",
  "Fragile releases or recurring production issues",
  "Products that need steady feature work and maintenance",
];

const commonReasons = [
  "\"We have software that mostly works, but important parts keep breaking.\"",
  "\"The developer who built this is gone, and we need someone to take it over.\"",
  "\"Too much of our process still lives in spreadsheets, email, or Slack.\"",
  "\"We need to add features without rebuilding the whole thing.\"",
];

const workingStyle = [
  "Understand the workflow before changing the software",
  "Solve the immediate problem without creating unnecessary complexity",
  "Explain technical decisions and tradeoffs clearly",
  "Leave the system easier to understand and maintain",
];

export default function Services() {
  return (
    <ContactPageLayout>
      <section className="max-w-2xl space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#fafafa]">
            Software that&apos;s broken, unfinished, manual, or ready for the next
            step.
          </h1>
          <p className="text-lg text-[#9ca3af] leading-relaxed">
           I help businesses fix, extend, and improve existing software, and build practical systems around the way they actually work.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-[#10b981] hover:text-[#fafafa] transition-colors group"
          >
            <span>Tell me what you&apos;re working on</span>
            <span className="text-[#fb923c] transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="border-t border-[rgba(156,163,175,0.1)] pt-12 space-y-6">
         {/* <h2 className="text-2xl font-bold text-[#fafafa]">Build / Extend / Stabilize</h2> */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceTracks.map((track) => (
              <article
                key={track.title}
                className="space-y-3 rounded-lg border border-[rgba(156,163,175,0.2)] p-5 transition-all hover:border-[rgba(16,185,129,0.3)] hover:bg-[rgba(16,185,129,0.02)]"
              >
                <h3 className="text-base font-semibold uppercase tracking-wide text-[#fafafa]">
                  {track.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#9ca3af]">
                  {track.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-[rgba(156,163,175,0.1)] pt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">Smaller problems are welcome too</h2>
          <p className="text-[#9ca3af] leading-relaxed">
            Not every problem needs a large project. A bug fix, broken integration, small feature, deployment issue, or a few hours of troubleshooting may be all you need.
          </p>
          <p className="text-[#9ca3af] leading-relaxed">
            If that's the case, I'll tell you.
          </p>
        </div>

        <div className="border-t border-[rgba(156,163,175,0.1)] pt-10 space-y-5">
          <h2 className="text-2xl font-bold text-[#fafafa]">Existing software is especially welcome</h2>
          <p className="text-[#9ca3af] leading-relaxed">
            You don’t need a clean codebase, complete documentation, or the original developer available. I’m comfortable figuring out how an existing system works and what actually needs attention.
          </p>
          <ul className="space-y-2 text-[#9ca3af]">
            {inheritedSystemFocus.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mr-3 text-[#fb923c]">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[rgba(156,163,175,0.1)] pt-10 space-y-6">
          <h2 className="text-2xl font-bold text-[#fafafa]">What this can look like</h2>
          <div className="space-y-4 rounded-lg border border-[rgba(156,163,175,0.2)] bg-[rgba(17,24,39,0.25)] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#10b981]">
              Tidal Cans
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              I started with a focused onboarding and billing project, then took over an inherited operations platform and continued improving it as the business evolved.
            </p>
            <p className="text-sm font-semibold text-[#fafafa]">
              Focused project → inherited system → stabilization → ongoing development
            </p>
          </div>
        </div>

        <div className="border-t border-[rgba(156,163,175,0.1)] pt-10 space-y-5">
          <h2 className="text-2xl font-bold text-[#fafafa]">Common reasons people reach out</h2>
          <ul className="space-y-3 text-[#9ca3af]">
            {commonReasons.map((reason) => (
              <li
                key={reason}
                className="border-l-2 border-[rgba(16,185,129,0.4)] pl-4 italic"
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[rgba(156,163,175,0.1)] pt-10 space-y-5">
          <h2 className="text-2xl font-bold text-[#fafafa]">How I work</h2>
          <ul className="space-y-2 text-[#9ca3af]">
            {workingStyle.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mr-3 text-[#10b981]">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[rgba(156,163,175,0.1)] pt-10 space-y-6">
          <h2 className="text-2xl font-bold text-[#fafafa]">One project or ongoing support</h2>
          <p className="text-[#9ca3af] leading-relaxed">
            Whether you need help with one specific problem or ongoing development and maintenance, I’m happy to start with what you have and figure out what makes sense next.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-[#10b981] hover:text-[#fafafa] transition-colors group"
          >
            <span>Tell me what you&apos;re working on</span>
            <span className="text-[#fb923c] transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </ContactPageLayout>
  );
}
