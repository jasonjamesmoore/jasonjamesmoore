import type { Project } from "@/content/types";

export const onboardingSubscriptionProject: Project = {
  slug: "onboarding-subscription-system",
  title: "Subscription Billing & Onboarding System",
  role: "Solo Full-stack Engineer / Workflow Automation Consultant",
  outcome:
    "Translated manual onboarding and seasonal billing rules into a production self-service workflow",
  status: "In Production",
  techStack: [
    "Next.js 15",
    "TypeScript 5",
    "React 19",
    "Stripe API",
    "React Hook Form 7",
    "Zod 4",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  links: {
    github: "https://github.com/jasonjamesmoore/Stripe-Schedule-Onboarding",
    live: "https://onboard.jasonjamesmoore.com",
    caseStudy:
      "/projects/onboarding-subscription-system",
  },
  card: {
    description:
      "Built a production workflow automation and subscription system for a residential service business, translating manual onboarding, seasonal pricing, and multi-property billing rules into a self-service customer flow.",
    proofLine: "This portfolio demo mirrors the live production system.",
  },
  modal: {
    summary:
      "Production workflow automation for a residential service business, translating address-specific service rules and seasonal pricing into self-service onboarding and automated Stripe subscription scheduling.",
    validated: [
      "Multi-step form with step-aware Zod validation",
      "Stripe payment integration with Payment Intents",
      "Dynamic multi-phase subscription schedule creation",
      "Location-based service area validation (zip code matching)",
      "Webhook handlers for subscription lifecycle events",
      "Real-time invoice preview with phase breakdown",
      "Per-property seasonal add-on configuration",
      "Responsive UI with loading states and error handling",
    ],
    nextSteps: [
      "User authentication and account management",
      "Admin dashboard for subscription oversight",
      "Postgres integration for customer data persistence and contractor app consumption",
      "Customer self-service portal (pause/cancel/modify)",
      "Email notifications for seasonal phase transitions",
      "Analytics dashboard for revenue forecasting",
      "Automated testing suite (unit + integration)",
      "Rate limiting and abuse prevention",
    ],
  },
  caseStudy: {
    clientLabel: "Tidal Cans (Residential Service Company)",
    timeline: "2025",
    tldr: "Replaced a manual onboarding and seasonal billing process with a production self-service system for a residential service business. I mapped the company’s multi-property service rules, seasonal pricing, and billing workflow, then translated them into automated Stripe subscription schedules that adjust throughout the year.",
    engagementType: "Solo Full-Stack Development",
    disclaimer:
      "This case study describes a production system currently processing real payments for Tidal Cans. The linked demo uses Stripe test mode to allow recruiters to explore the functionality without processing real transactions.",
    challenge: `My client was onboarding customers and managing recurring billing through a process that required significant manual intervention. Each customer could have multiple service addresses, different seasonal service windows, and changing prices throughout the year, making the workflow increasingly difficult to manage reliably.

Before building anything, I worked through how the service and billing process actually operated. The business model included:

- **Base service**: Weekly trash valet for residential properties, synced to local garbage collection days
- **Seasonal add-ons**: Second weekly pickup during peak periods (summer at beach properties)
- **Location-specific rules**: Different seasonal windows for different service areas
- **Multi-property subscriptions**: Customers can subscribe for multiple addresses with mixed seasonal statuses

The existing process depended heavily on manual billing work and became harder to manage as customer and property combinations increased. They needed an automated system that would:

- **Dynamically calculate pricing** based on signup date and property locations.
- **Automatically adjust subscription costs** as properties enter/exit seasonal windows.
- **Handle prorated billing** for mid-month signups.
- **Preview upcoming charges** before customers commit.
- **Validate service coverage** by zip code during onboarding.`,
    technicalChallenges: [
      {
        title: "Explicit Phase Definitions",
        description:
          "Stripe's Subscription Schedules require explicit phase definitions—they don't auto-calculate based on metadata",
      },
      {
        title: "Complex Boundary Calculations",
        description:
          "Each property has unique seasonal dates, requiring complex phase boundary calculations",
      },
      {
        title: "Multi-Property Consolidation",
        description:
          "Multiple properties with overlapping/non-overlapping seasons need consolidated into single schedule phases",
      },
      {
        title: "Idempotent Webhooks",
        description:
          "Webhook-based schedule creation must be idempotent (handle retries)",
      },
      {
        title: "Accurate Invoice Previews",
        description:
          "Invoice previews must accurately reflect which properties have seasonal service in each phase",
      },
    ],
    approach: `I first separated the parts of the workflow that required business judgment from the rules that could be represented reliably in software. Because pricing depended on multiple properties, location-specific seasonal windows, signup dates, and recurring changes throughout the year, a simple form or static Stripe subscription was not enough.

I chose a custom onboarding workflow backed by Stripe Subscription Schedules because it let the system encode those rules once and apply them consistently without requiring staff to recreate the billing logic for each customer.

The technical solution used Stripe's Subscription Schedules API to define multiple pricing phases that transition automatically on specified dates.

**Key architectural decisions:** 

1. **Metadata-driven configuration**: Store per-address service selections in subscription metadata so webhooks can access business logic without a database

2. **Webhook-triggered schedule creation**: Don't create the schedule immediately—wait for the \`invoice.paid\` event, then build the multi-phase schedule based on the subscription's metadata

3. **Server-side phase calculation**: Use UTC timestamps to calculate seasonal window boundaries, then build phases that align with month boundaries for clean billing periods

4. **Service area validation**: Maintain a typed configuration mapping zip codes to service rules (base pickup day, seasonal pickup day, seasonal window dates)

5. **Type-safe forms**: Use React Hook Form with Zod schemas that validate different fields based on the current wizard step

**Data flow:**

1. User completes onboarding → Server creates subscription + payment intent
2. Payment succeeds → Stripe fires \`invoice.paid\` webhook
3. Webhook reads subscription metadata → Builds multi-phase schedule
4. Client polls for schedule → Displays phase breakdown and invoice preview`,
    solution: `**Multi-Step Onboarding System**

Built a 4-step wizard with:
- Real-time validation using React Hook Form and Zod
- Separate flows for Personal accounts and Business accounts (production only)
- Contact information collection
- Service address management (add/edit/remove multiple properties)
- Plan selection with per-property seasonal add-on toggles
- Stripe payment integration with real-time validation

Form validation uses step-aware Zod schemas that only validate fields relevant to the current step, preventing premature error states.

**Dynamic Subscription Schedule Builder** (\`phaseBuilder.ts\`)

Core algorithm that:
- Reads subscription metadata containing per-address seasonal selections
- Identifies all unique seasonal window boundaries across properties
- Generates phase date ranges aligned to month boundaries
- Calculates correct line item quantities for each phase
- Handles edge cases (overlapping seasons, properties with no seasonal service, open-ended final phases)

---

**Example: Multi-Property Seasonal Calculation**

Customer subscribes to 3 base properties with 2 seasonal add-ons on December 8, 2025:

- **Property A (Topsail Beach)**: Seasonal Nov 1, 2025 - Mar 1, 2026 *(currently in season)*
- **Property B (Surf City)**: Seasonal Oct 15, 2025 - Feb 28, 2026 *(currently in season)*
- **Property C (Wilmington)**: No seasonal service

The system generates **3 phases** for the first year:

1. **Dec 8, 2025 - Feb 27, 2026**: 3 base + 2 seasonal (A & B both in season)
2. **Feb 27, 2026 - Feb 28, 2026**: 3 base + 1 seasonal (only A still in season)
3. **Feb 28, 2026 - ongoing**: 3 base properties (all seasons ended, pattern repeats next cycle)

Each phase automatically includes:
- Correct base service quantity (always 3 in this example)
- Dynamic seasonal add-on quantity based on which properties are in their windows
- Month-aligned boundaries for clean billing periods
- Prorated initial charges if signup occurs mid-month

---

**Webhook Infrastructure** (\`webhook/route.ts\`)

Implemented secure webhook handlers:
- Signature verification using Stripe webhook secrets
- Idempotent schedule creation (prevents duplicates on retries)
- Deduplication logic using event IDs
- Error handling with detailed logging
- Multiple event handlers:
  - \`invoice.paid\`: Triggers schedule attachment
  - \`customer.subscription.updated\`: Fallback schedule attachment
  - \`invoice.payment_failed\`: Error logging
  - \`subscription_schedule.created/updated\`: Audit logging

**Invoice Preview API** (\`subscription-overview/route.ts\`)

Server endpoint that:
- Fetches upcoming invoice with Stripe's preview API
- Retrieves subscription schedule with all phases
- Enriches response with price metadata (names, types, amounts)
- Handles edge cases (schedule not yet created)

**Location-Based Validation** (\`serviceAreas.ts\`)

Maps cities/zip codes to rules, validates addresses during onboarding, displays pickup schedules in real-time.`,
    results: `**Technical Achievements:**

- **Zero webhook failures**: Idempotent design handles Stripe's retry logic gracefully
- **Accurate prorations**: Server-side calculations prevent client tampering
- **Type-safe end-to-end**: TypeScript across forms, API routes, and business logic
- **Maintainable codebase**: Clear separation of concerns, extensive inline documentation
- **Production-ready patterns**: Error boundaries, loading states, optimistic UI updates

**Business Impact:**

- Reduced manual onboarding and recurring billing work
- Encoded seasonal pricing and service rules directly into the workflow
- Enabled customers to complete multi-property onboarding without staff intervention
- Provided customers with transparent pricing and upcoming-charge previews
- Created a production foundation that could be extended as the client's operational needs evolved

**Future Enhancements:**

The current implementation is a fully functional MVP. Planned expansions include:
- Customer authentication and self-service portal
- Admin dashboard for subscription management and analytics
- PostgreSQL integration for customer data and audit logs
- Email notifications for phase transitions
- Subscription modification flows (add/remove properties, pause service)`,
    keyMetrics: [
      {
        value: "Multi-Property",
        label: "Business Rules",
        description:
          "One customer flow supports multiple service addresses with different seasonal pricing windows",
      },
      {
        value: "Automated",
        label: "Subscription Scheduling",
        description:
          "Stripe schedule phases are generated from signup date, property selections, and seasonal service rules",
      },
    ],
    keyLearnings: [
      {
        title: "Stripe Subscription Schedules are powerful but complex",
        lesson:
          "Careful planning of phase boundaries is critical. UTC timestamp handling requires precision to avoid billing errors and edge cases.",
      },
      {
        title: "Metadata is underrated",
        lesson:
          "Encoding business rules in Stripe metadata eliminates database dependencies for webhook logic while maintaining flexibility for future changes.",
      },
      {
        title: "Webhook idempotency is non-negotiable",
        lesson:
          "Stripe retries failed webhooks, so every handler must safely handle duplicate events. Use event IDs for deduplication and design for multiple invocations.",
      },
      {
        title: "Client-side polling needs boundaries",
        lesson:
          "Implemented max attempts and stabilization detection to prevent infinite polling loops while ensuring reliable state synchronization.",
      },
      {
        title: "Form state management at scale",
        lesson:
          "React Hook Form + Zod scales well for complex multi-step forms, but step-aware validation requires careful schema design to prevent premature error states.",
      },
    ],
  },
};
