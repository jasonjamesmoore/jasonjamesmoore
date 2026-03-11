import type { Project } from "@/content/types";

export const governanceContentLifecycleProject: Project = {
  slug: "governance-content-lifecycle",
  title: "Governance-First Content Lifecycle Prototype",
  role: "Full-stack engineer and content model designer",
  outcome:
    "Built and validated a governed content lifecycle that separates approval, scheduling, and public visibility.",
  status: "Prototype",
  techStack: [
    "Next.js",
    "Sanity",
    "TypeScript",
    "GROQ",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  links: {
    github: "https://github.com/jasonjamesmoore/content-governance",
    live: "https://governance.jasonjamesmoore.com/blog",
    caseStudy: "/projects/governance-content-lifecycle",
  },
  card: {
    description:
      "Designed and implemented a governance-first content lifecycle prototype rather than a generic CMS blog. The system models ownership, editorial state, and visibility windows directly in schema, then enforces public visibility through frontend queries and route checks. Studio surfaces governance status through summaries and task-oriented queues, improving editorial clarity and maintainability.",
    proofLine:
      "Includes a live frontend, custom Studio governance surfaces, and lifecycle enforcement across schema, queries, and route logic.",
  },
  modal: {
    summary:
      "Governance-first content lifecycle prototype with workflow state and ownership modeled in Sanity, operational queues surfaced in Studio, and public visibility enforced in frontend queries and route checks.",
    validated: [
      "Explicit lifecycle model on posts: draft, inReview, approved, scheduled, published.",
      "Required workflow object with blocking and warning validations for state/date consistency.",
      "Visibility window model (`visibleFrom` / `visibleUntil`) with migration-safe fallback to legacy fields (`publishAt` / `expiresAt`).",
      "Custom Studio Governance Overview surface showing derived status, ownership, visibility state, and alerts.",
      "Custom Studio desk structure with operational queues: Drafts, Scheduled, Missed publish, Published, Featured, Expired.",
      "Frontend blog listing queries restrict content to published items inside active visibility windows.",
      "Post detail routes block unpublished and not-yet-visible content.",
      "Draft-mode and Presentation integration for editorial preview workflows.",
    ],
    nextSteps: [
      "Decide and enforce end-window behavior on post detail routes (expired content is currently still routable by design).",
      "Add explicit transition constraints (for example, requiring approved before scheduled/published) if policy demands strict progression.",
      "Introduce role-based permissions and workflow ownership controls at the platform level.",
      "Add automated tests for schema validation rules and frontend visibility predicates.",
    ],
    futureExtensions: [
      "Generalize lifecycle governance from `post` to additional content types via reusable policy patterns.",
      "Add release orchestration features (batch publish windows, release calendars, dependency checks).",
      "Add audit trail and SLA reporting for time-in-state, missed publishes, and ownership bottlenecks.",
      "Add event-driven notifications for upcoming windows, missed publishes, and expired-but-published items.",
    ],
  },
  caseStudy: {
    clientLabel: "Independent governance prototype",
    timeline: "January 2026",
    tldr:
      "Built a governed content lifecycle prototype that makes editorial state, ownership, and visibility windows explicit, then enforces those rules across Studio and frontend delivery. The result is a clearer, safer publishing model—not just a rendered CMS blog.",
    engagementType:
      "Self-directed content systems and full-stack prototype",
    disclaimer:
      "Prototype implementation, not a production client deployment. Demonstrates governance architecture and enforcement patterns; does not yet include enterprise RBAC, workflow automation, or analytics instrumentation.",
    challenge:
      "Most content stacks collapse editorial intent and public release into a single publish action, which creates ambiguity for teams managing real publishing workflows. Editors need to know what is still in review, what is approved but not yet live, what is scheduled, and what has missed its intended release window. The core problem was to model internal approval state separately from external visibility timing, then keep Studio operations and frontend delivery aligned so content cannot appear outside policy windows or create confusion about its true status.",
    technicalChallenges: [
      {
        title: "Separating internal lifecycle state from public release behavior",
        description:
          "Modeled editorial state (`draft` to `published`) independently from visibility windows (`visibleFrom` / `visibleUntil`) and public sort date (`publishedAt`) so governance intent and presentation concerns are not conflated.",
      },
      {
        title: "Migration-safe schema evolution",
        description:
          "Introduced new visibility fields while supporting legacy `publishAt` / `expiresAt` values through fallback logic, hidden-field behavior, and targeted warnings to avoid breaking existing content during transition.",
      },
      {
        title: "Cross-surface policy consistency",
        description:
          "Aligned Studio list filters, schema validations, and frontend GROQ predicates so operational queues and public visibility decisions use the same lifecycle logic.",
      },
      {
        title: "Operational clarity inside the authoring surface",
        description:
          "Built a custom governance overview input that derives effective state, visibility status, and alert conditions directly from form values, reducing interpretation burden for editors.",
      },
    ],
    approach:
      "Used a governance-first architecture: model lifecycle semantics explicitly in schema, add validation guardrails for invalid state/date combinations, expose operational queues in Studio based on the same predicates used by delivery, and apply frontend query/route enforcement so policy is not only advisory. Chose migration-safe coalescing across new and legacy fields to preserve continuity while evolving the model.",
    solution:
      "Implemented a dedicated `workflow` object and required it on `post` documents, with owner group, editorial state, and visibility window controls. Added blocking and warning validators for scheduling and expiration edge cases. Added a custom Governance Overview UI and a desk structure organized by actionable lifecycle states (scheduled, missed publish, currently live, expired). On the frontend, constrained blog listing and featured selection to published posts within active windows; added route checks for publish state and start-window eligibility; integrated draft-mode preview to support editorial validation.",
    results:
      "The prototype proves that governance logic can be encoded as a maintainable system property across the content model, editorial interface, and delivery layer. It makes publishing status more legible inside Studio, reduces the chance of content becoming publicly visible outside its intended window, and creates clearer operational views than a default CMS setup. It also establishes a reusable lifecycle pattern for broader content types while surfacing the remaining policy decisions needed for production hardening, especially around end-window routing behavior, transition strictness, permissions, and automated regression coverage.",
    keyMetrics: [
      {
        value: "5",
        label: "Explicit lifecycle states",
        description:
          "Draft, In Review, Approved, Scheduled, Published are modeled in schema and available to editors.",
      },
      {
        value: "6",
        label: "Operational Studio queues",
        description:
          "Drafts, Scheduled, Missed publish, Published, Featured, and Expired views support workflow triage.",
      },
    ],
    keyLearnings: [
      {
        title: "Governance requires dual enforcement",
        lesson:
          "Schema validation protects data integrity, but public safety still depends on query and route-level filtering. Both layers are necessary for reliable lifecycle control.",
      },
      {
        title: "Operational views are part of system design",
        lesson:
          "Workflow clarity improves when editor surfaces are organized by actionable status (for example, missed publishes), not generic content type lists.",
      },
      {
        title: "Model evolution should include migration semantics",
        lesson:
          "Supporting legacy fields with explicit fallback and warnings enables iterative rollout of better governance models without disruptive rewrites.",
      },
      {
        title: "Prototype credibility depends on policy completeness",
        lesson:
          "A strong prototype can prove architecture direction, but production readiness still needs explicit decisions on transition rules, permissions, testing, and observability.",
      },
    ],
  },
}
// export const governanceContentLifecycleProject: Project = {
//   slug: "governance-content-lifecycle",
//   title: "Governance-First Content Lifecycle Prototype",
//   role: "Full-stack engineer and content model designer",
//   outcome: "Built and validated an end-to-end governed content lifecycle for a modern marketing site",
//   status: "Prototype",
//   techStack: [
//       "Next.js",
//       "Sanity",
//       "TypeScript",
//       "GROQ",
//       "Tailwind CSS",
//       "shadcn/ui",
//     ],
//   links: {
//     github: "https://github.com/jasonjamesmoore/content-governance",
//     live: "https://governance.jasonjamesmoore.com/blog",
//     caseStudy: "/projects/governance-content-lifecycle",
//   },
//   card: {
//     description: "Designed and implemented a governance-first content lifecycle prototype for a modern marketing site using Next.js and Sanity. The model separates approval, scheduling, and release into explicit controls, enforces visibility windows on the frontend, and surfaces ownership, status, and alerts directly in Studio. Built to validate how structured content modeling and editorial workflows can reduce brand risk, improve operational clarity, and scale across teams.",
//     proofLine: "Includes live demo, Studio walkthrough, and governance validation artifacts.",
//   },
//   modal: {
//     summary: " ",
//     validated: [
      
//     ],
//     nextSteps: [
      
//     ],
//   },
//   caseStudy: {
//     clientLabel: " ",
//     timeline: "January 2026",
//     tldr: " ",
//     engagementType: " ",
//     challenge: ``,
//     technicalChallenges: [
      
//     ],
//     approach: ``,
//     solution: ``,
//     results: ` `,
//     keyMetrics: [
      
//     ],
//     keyLearnings: [
      
//     ],
//   },
// };
