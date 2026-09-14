import { AppLayout } from "@/components/AppLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechBadge } from "@/components/TechBadge";
import { projects } from "@/content/projectIndex";




export default function Home() {
  return (
    <AppLayout>
      <div className="pb-100">
        {/* About */}
        <section id="about" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[#9ca3af]">
              I’m a full-stack developer working across <b className="text-[#fafafa]">production software, internal tools, and workflow-heavy applications</b>. I’m especially interested in work that involves extending <b className="text-[#fafafa]">existing systems, solving ambiguous technical problems, and turning real business processes into software.</b>
            </p>
            <p className="text-[#9ca3af]">
              My background as a professional musician and educator shapes how I work: <b className="text-[#fafafa]">communicate clearly, ask good questions, and make technical decisions that are practical and understandable.</b>
            </p>
          </div>
        </section>
        {/* How I Work */}
        <section className="pt-12">
          <div className="space-y-3">
            <h2
              id="how-i-work"
              className="scroll-mt-24 text-2xl font-bold text-[#fafafa]"
            >
              How I Work
            </h2>
            <p className="text-[#9ca3af] leading-relaxed">
              I'm most effective on systems that need to stay understandable as
              they grow.
            </p>
            <div className="border-l-2 border-[#10b981] pl-6">
              <ul className="space-y-2 text-[#9ca3af]">
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-3">▹</span>
                  <span>software that matches the way people actually work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-3">▹</span>
                  <span>systems that stay clear as requirements change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-3">▹</span>
                  <span>solutions that avoid unnecessary complexity</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="pt-16 space-y-6">
          <h2
            id="experience"
            className="scroll-mt-24 text-2xl font-bold text-[#fafafa]"
          >
            Selected Experience
          </h2>

          <div className="space-y-4">
            <ExperienceCard
              startDate="2025"
              endDate="Present · Contract"
              title="Lead Software Engineer"
              company="Tidal Cans"
              description="Built and maintain production software across Tidal Cans’ customer billing and contractor operations. Delivered a Next.js onboarding system with multi-property seasonal pricing, proration, and Stripe Subscription Schedules, then assumed ownership of an inherited React Native, Node.js, and PostgreSQL platform. Stabilized the inherited platform and shipped contractor access controls, route management, verification review, payout reporting, and administrative workflows."
              technologies={[
                "Next.js",
                "React Native",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Stripe",
              ]}
              link="https://www.tidalcans.com/"
            />

            <ExperienceCard
              startDate="2023"
              endDate="Present"
              title="React Developer & Consultant"
              company="Conduction"
              description="Contributed to a role-based marketplace and user hub for a music-education startup, working with engineers, educators, and designers on frontend architecture, multi-user workflows, and product behavior. Helped plan and scope features, debug client-side state and asynchronous issues, and shape reusable component patterns as the product evolved."
              technologies={["JavaScript", "TypeScript", "PostgreSQL", "React", "Mantine"]}
              link="https://www.conduction.live/"
            />
          </div>
        </section>

        {/* Projects */}
        <section className="pt-24 space-y-6">
          <h2
            id="projects"
            className="scroll-mt-24 text-2xl font-bold text-[#fafafa]"
          >
            Selected Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                role={project.role}
                outcome={project.outcome}
                description={project.card.description}
                modalSummary={project.modal.summary}
                proofLine={project.card.proofLine}
                techStack={project.techStack}
                status={project.status}
                validated={project.modal.validated}
                nextSteps={project.modal.nextSteps}
                githubUrl={project.links?.github}
                liveUrl={project.links?.live}
                slug={project.slug}
              />
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="pt-16 space-y-6">
          <h2
            id="tech"
            className="scroll-mt-24 text-2xl font-bold text-[#fafafa]"
          >
            Tech
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "Stripe",
              "REST APIs",
              "Supabase",
              "Sanity",
              "Tailwind CSS",
              "shadcn/ui",
              "Mantine",
              "Git",
              "JavaScript",
            ].map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
