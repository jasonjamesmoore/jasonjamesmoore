import { onboardingSubscriptionProject } from "./onboarding-subscription";
import { governanceContentLifecycleProject } from "./governanceContentLifecycle";
import { practiceKitProject } from "./practiceKit";

export const projects = [
  onboardingSubscriptionProject,
  governanceContentLifecycleProject,
  practiceKitProject,
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
);