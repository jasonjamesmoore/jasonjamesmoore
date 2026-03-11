import { useRouter } from "next/router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { projectsBySlug } from "@/content/projectIndex";

export default function ProjectCaseStudy() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") {
    return null;
  }

  const project = projectsBySlug[slug];
  const caseStudy = project?.caseStudy;

  if (!project || !caseStudy) {
    return (
      <CaseStudyLayout>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-[#fafafa] mb-4">
            Project Not Found
          </h1>
          <Link
            href="/"
            className="text-[#10b981] hover:text-[#fafafa] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </CaseStudyLayout>
    );
  }

  return (
    <CaseStudyLayout>
      <div className="max-w-3xl space-y-16 pb-[50vh]">
        {/* Header */}
        <div className="space-y-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#10b981] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#fafafa] leading-tight">
              {project.title}
            </h1>

            {caseStudy.clientLabel && (
              <p className="text-xl text-[#9ca3af]">
                {caseStudy.clientLabel}
                {caseStudy.timeline ? ` · ${caseStudy.timeline}` : ""}
              </p>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)] text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {project.links?.live && (
                <a
                  href={project.links?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981] text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#0ea472] transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <ExternalLink size={18} />
                  Try Live Demo
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[rgba(156,163,175,0.3)] text-[#9ca3af] font-medium rounded-lg hover:border-[#10b981] hover:text-[#10b981] transition-all duration-200"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* TL;DR / Quick Facts */}
        {(caseStudy.tldr ||
          caseStudy.engagementType ||
          caseStudy.timeline ||
          project.status) && (
          <div className="border-l-4 border-[#10b981] bg-[rgba(16,185,129,0.05)] p-6 rounded-r-lg space-y-4">
            {caseStudy.tldr && (
              <div>
                <h3 className="text-sm font-bold text-[#10b981] uppercase tracking-wide mb-2">
                  TL;DR
                </h3>
                <p className="text-[#9ca3af] leading-relaxed">
                  {caseStudy.tldr}
                </p>
              </div>
            )}

            {/* Disclaimer */}
            {caseStudy.disclaimer && (
              <div className="pt-3 border-t border-[rgba(251,146,60,0.2)]">
                <p className="text-xs text-[#9ca3af] leading-relaxed italic">
                  <span className="font-semibold text-[#fb923c] not-italic">
                    Note:
                  </span>{" "}
                  {caseStudy.disclaimer}
                </p>
              </div>
            )}

            {(caseStudy.engagementType ||
              caseStudy.timeline ||
              project.status) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[rgba(16,185,129,0.2)]">
                {caseStudy.engagementType && (
                  <div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wide mb-1">
                      Engagement
                    </div>
                    <div className="text-sm text-[#fafafa] font-semibold">
                      {caseStudy.engagementType}
                    </div>
                  </div>
                )}
                {project.status && (
                  <div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wide mb-1">
                      Status
                    </div>
                    <div className="text-sm text-[#10b981] font-semibold">
                      {project.status}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* The Challenge */}
        <section id="challenge" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Challenge</h2>
          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-['']">
            <ReactMarkdown>{caseStudy.challenge}</ReactMarkdown>
          </div>

          {/* Technical Challenges Callout */}
          {caseStudy.technicalChallenges &&
            caseStudy.technicalChallenges.length > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-[#fb923c] flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Technical Challenges
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.technicalChallenges.map((challenge, index) => (
                    <Card
                      key={index}
                      className="bg-[rgba(251,146,60,0.08)] border-[rgba(251,146,60,0.2)] hover:border-[rgba(251,146,60,0.4)] transition-colors"
                    >
                      <CardContent className="p-4">
                        <div className="text-sm font-bold text-[#fb923c] mb-2">
                          {challenge.title}
                        </div>
                        <div className="text-xs text-[#9ca3af] leading-relaxed">
                          {challenge.description}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
        </section>

        {/* The Approach */}
        <section id="approach" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Approach</h2>
          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-['']">
            <ReactMarkdown>{caseStudy.approach}</ReactMarkdown>
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Solution</h2>
          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-[''] [&_hr]:!border-t-2 [&_hr]:!border-[rgba(251,146,60,0.3)] [&_hr]:!my-6">
            <ReactMarkdown>{caseStudy.solution}</ReactMarkdown>
          </div>
        </section>

        {/* The Results */}
        <section id="results" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Results</h2>

          {/* Key Achievements Callout */}
          {caseStudy.keyMetrics && caseStudy.keyMetrics.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {caseStudy.keyMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="bg-[rgba(16,185,129,0.08)] border-[rgba(16,185,129,0.2)]"
                >
                  <CardContent className="pl-5">
                    <div className="text-2xl font-bold text-[#10b981] mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-[#fafafa] font-semibold">
                      {metric.label}
                    </div>
                    <div className="text-xs text-[#9ca3af] mt-2">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-['']">
            <ReactMarkdown>{caseStudy.results}</ReactMarkdown>
          </div>
        </section>

        {/* Key Learnings */}
        {caseStudy.keyLearnings && caseStudy.keyLearnings.length > 0 && (
          <section id="learnings" className="scroll-mt-24 space-y-4">
            <h2 className="text-2xl font-bold text-[#fafafa] flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Key Learnings
            </h2>
            <p className="text-[#9ca3af] text-sm">
              Insights and growth from building this project
            </p>
            <div className="grid grid-cols-1 gap-4 mt-6">
              {caseStudy.keyLearnings.map((learning, index) => (
                <Card
                  key={index}
                  className="bg-[rgba(100,255,218,0.05)] border-[rgba(100,255,218,0.15)] hover:border-[rgba(100,255,218,0.3)] transition-all"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-[#10b981] font-bold text-lg mt-0.5">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="text-sm font-bold text-[#fafafa]">
                          {learning.title}
                        </div>
                        <div className="text-xs text-[#9ca3af] leading-relaxed">
                          {learning.lesson}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Back to Projects */}
        <div className="border-t border-[rgba(156,163,175,0.1)] pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#10b981] hover:text-[#fafafa] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
