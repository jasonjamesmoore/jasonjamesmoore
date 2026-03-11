"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface ProjectCardProps {
  title: string;
  role: string;
  outcome: string;
  description: string;
  modalSummary: string;
  proofLine?: string;
  techStack: string[];
  status: "MVP" | "In Progress" | "In Production" | "Prototype";
  validated: string[];
  nextSteps: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

export function ProjectCard({
  title,
  role,
  outcome,
  description,
  modalSummary,
  proofLine,
  techStack,
  status,
  validated,
  nextSteps,
  githubUrl,
  liveUrl,
  slug,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const statusColors = {
    MVP: "text-[#fb923c] border-[#fb923c]",
    "In Progress": "text-[#fb923c] border-[#fb923c]",
    "In Production": "text-[#10b981] border-[#10b981]",
    Prototype: "text-[#3b82f6] border-[#3b82f6]",
  };

  return (
    <>
      {/* Card Preview - clickable */}
      <button onClick={() => setOpen(true)} className="w-full text-left">
        <Card className="border-transparent bg-transparent p-6 rounded-lg transition-all duration-300 hover:bg-[rgba(156,163,175,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-pointer">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold leading-tight text-[#fafafa] group-hover:text-[#10b981] transition">
                {title}
              </h3>
              <Badge
                variant="outline"
                className={`shrink-0 text-xs px-2 py-1 ${statusColors[status]}`}
              >
                {status}
              </Badge>
            </div>

            <div className="space-y-2 text-sm text-[#9ca3af]">
              <div className="flex items-start gap-3">
                <span className="min-w-[68px] font-semibold text-[#d4d4d8]">
                  Role:
                </span>
                <span>{role}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="min-w-[68px] font-semibold text-[#d4d4d8]">
                  Outcome:
                </span>
                <span>{outcome}</span>
              </div>
            </div>

            <div className="text-[#9ca3af] text-sm leading-7 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-[#fafafa]">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>

            {proofLine && (
              <p className="text-sm font-semibold text-[#fafafa]">
                {proofLine}
              </p>
            )}

            <div className="flex flex-wrap gap-2 pt-1">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)] text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </button>

      {/* Modal - Full Details */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#1a1a1a] border-[rgba(156,163,175,0.2)] text-[#fafafa] max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4 pr-8">
              <DialogTitle className="text-2xl font-bold text-[#fafafa]">
                {title}
              </DialogTitle>
              <Badge
                variant="outline"
                className={`text-xs px-2 py-1 flex-shrink-0 ${statusColors[status]}`}
              >
                {status}
              </Badge>
            </div>
            <DialogDescription className="text-[#9ca3af] text-base mt-4 [&_p]:!mb-3 [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold">
              <ReactMarkdown>{modalSummary}</ReactMarkdown>
            </DialogDescription>
          </DialogHeader>

          {/* Links - Prominent at top */}
          <div className="flex flex-wrap gap-3 pt-4 pb-4 border-b border-[rgba(156,163,175,0.1)]">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#10b981] hover:text-[#fafafa] transition text-sm font-medium"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-[rgba(156,163,175,0.05)] text-[#9ca3af] hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10b981] transition text-sm"
              >
                <Github size={16} />
                View Code
              </a>
            )}
              <Link
                href={`/projects/${slug}`}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-[rgba(156,163,175,0.05)] text-[#9ca3af] hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10b981] transition text-sm"
                onClick={() => setOpen(false)}
              >
                Full Case Study
                <ArrowRight size={16} color="#fb923c" />
              </Link>
          </div>

          <div className="space-y-6 mt-6">
            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-bold text-[#fafafa] uppercase tracking-wide mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)] text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Working Features */}
            <div>
              <h4 className="text-sm font-bold text-[#10b981] uppercase tracking-wide mb-3">
                ✓ Validated
              </h4>
              <ul className="space-y-2">
                {validated.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#9ca3af] flex items-start"
                  >
                    <span className="text-[#10b981] mr-2">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            {nextSteps.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-[#fb923c] uppercase tracking-wide mb-3">
                  → Next Steps
                </h4>
                <ul className="space-y-2">
                  {nextSteps.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#9ca3af] flex items-start"
                    >
                      <span className="text-[#fb923c] mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
