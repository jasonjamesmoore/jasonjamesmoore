export type ProjectStatus =
  | "MVP"
  | "In Progress"
  | "In Production"
  | "Prototype";

export interface ProjectLinkSet {
  github?: string;
  live?: string;
  caseStudy?: string;
}

export interface ProjectChallengeItem {
  title: string;
  description: string;
}

export interface ProjectLearningItem {
  title: string;
  lesson: string;
}

export interface ProjectMetricItem {
  value: string;
  label: string;
  description?: string;
}

export interface ProjectCardContent {
  description: string;
  proofLine?: string;
}

export interface ProjectModalContent {
  summary: string;
  validated: string[];
  nextSteps: string[];
  futureExtensions?: string[];
}

export interface ProjectCaseStudyContent {
  clientLabel?: string;
  timeline?: string;
  tldr?: string;
  engagementType?: string;
//   deployment?: string;
  disclaimer?: string;
  challenge: string;
  technicalChallenges?: ProjectChallengeItem[];
  approach: string;
  solution: string;
  results: string;
  keyLearnings?: ProjectLearningItem[];
  keyMetrics?: ProjectMetricItem[];
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  outcome: string;
  status: ProjectStatus;
  techStack: string[];
  links?: ProjectLinkSet;
  card: ProjectCardContent;
  modal: ProjectModalContent;
  caseStudy?: ProjectCaseStudyContent;
}