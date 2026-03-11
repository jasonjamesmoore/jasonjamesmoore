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
              I build <b className="text-[#fafafa]">durable software systems</b>{" "}
              that make complex workflows easier to operate, understand, and
              maintain. My background as an educator shapes how I work: clear
              thinking, strong communication, and software that stays legible as
              it grows.
            </p>
            <p className="text-[#9ca3af]">
              My work is primarily in <b className="text-[#fafafa]">React</b>,{" "}
              <b className="text-[#fafafa]">Next.js</b>,{" "}
              <b className="text-[#fafafa]">TypeScript</b>,{" "}
              <b className="text-[#fafafa]">Postgres/Supabase</b>, and{" "}
              <b className="text-[#fafafa]">Stripe</b>, spanning production
              systems like subscription platforms, internal tools, onboarding
              flows, and workflow-heavy product features. I’m equally interested
              in structured content systems where content models, editorial
              workflows, and governance rules need to support clarity at scale.
            </p>
            <p className="text-[#9ca3af]">
              I consistently gravitate toward work that balances:{" "}
              <b className="text-[#fafafa]">product workflow, architecture,</b>{" "}
              {""}
              and <b className="text-[#fafafa]">long-term maintainability</b>
              —where thoughtful UX, sound system design, and {""}
              clear operational logic need to work together.
            </p>
          </div>
        </section>

        {/* Optimize */}
        <section className="pt-16 space-y-6">
          <div className="space-y-4">
            <h2
              id="optimize"
              className="scroll-mt-24 text-2xl font-bold text-[#fafafa]"
            >
              What I Optimize For
            </h2>
            <p className="text-[#9ca3af] leading-relaxed">
              I'm most effective on systems that need to stay understandable as
              they grow.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">I optimize for:</p>
            <div className="border-l-2 border-[#10b981] pl-6 space-y-3">
              <ul className="space-y-3 text-[#9ca3af]">
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-3">▹</span>
                  <span>product workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-3">▹</span>
                  <span>developer experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-3">▹</span>
                  <span>long-term maintainability</span>
                </li>
              </ul>
            </div>
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
              endDate="Ongoing Contract"
              title="Full-stack Developer"
              company="Tidal Cans"
              description="Built a production onboarding and subscription management system using Stripe Subscription Schedules with dynamic seasonal pricing. 
              Also led infrastructure improvements including deployment hardening, security updates, and logging/backup implementation for an existing production platform."
              technologies={[
                "React",
                "TypeScript",
                "Node.js",
                "Stripe API",
                "Shadcn/ui",
              ]}
              link="https://www.tidalcans.com/"
            />

            <ExperienceCard
              startDate="2023"
              endDate="Present"
              title="React Developer & Consultant"
              company="Conduction"
              description="Worked with engineers, educators, and designers at a music-education startup to debug timeline features and improve state logic. Proposed architectural patterns adopted across the platform. Developed a marketplace MVP prototype to explore product direction and technical feasibility."
              technologies={["JavaScript", "PostgreSQL", "React", "Mantine"]}
              link="https://www.conduction.live/"
            />
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
              "Sanity.io",
              "Postgres/Supabase",
              "Stripe API",
              "Node.js",
              "JavaScript",
              "REST APIs",
              "Tailwind CSS",
              "shadcn/ui",
              "Git",
              "Mantine",
              "Framer Motion",
            ].map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
