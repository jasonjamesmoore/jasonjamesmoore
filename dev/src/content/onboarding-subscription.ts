import type { Project } from "@/content/types";

export const onboardingSubscriptionProject: Project = {
  slug: "onboarding-subscription-system",
  title: "Subscription Billing & Onboarding System",
  role: "Solo Full-stack Engineer",
  outcome:
    "Automated onboarding and seasonal subscription billing based on address-specific service rules",
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
      "Built a production onboarding and subscription management system for a residential service business. Implemented location-based seasonal pricing with Stripe Subscription Schedules, where charge schedules are automatically generated from seasonal rules tied to each service address. The system includes webhook-driven schedule creation, metadata-encoded business rules, and invoice previewing, and was built to remain maintainable as operational complexity grew.",
    proofLine: "This portfolio demo mirrors the live production system.",
  },
  modal: {
    summary:
      "Production onboarding and subscription system for a residential service business, where address-specific seasonal rules automatically generate Stripe subscription schedules.",
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
    tldr: "Built a production subscription management system with automated seasonal pricing for a residential service company. Architected complex multi-phase billing logic using Stripe Subscription Schedules, handling dynamic property-based pricing that automatically adjusts throughout the year. Zero webhook failures in production.",
    engagementType: "Solo Full-Stack Development",
    disclaimer:
      "This case study describes a production system currently processing real payments for Tidal Cans. The linked demo uses Stripe test mode to allow recruiters to explore the functionality without processing real transactions.",
    challenge: `My client operates a trash valet service with complex pricing requirements. Their business model includes:

- **Base service**: Weekly trash valet for residential properties, synced to local garbage collection days
- **Seasonal add-ons**: Second weekly pickup during peak periods (summer at beach properties)
- **Location-specific rules**: Different seasonal windows for different service areas
- **Multi-property subscriptions**: Customers can subscribe for multiple addresses with mixed seasonal statuses

The existing manual billing process was error-prone and couldn't scale. They needed an automated system that would:

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
    approach: `I architected a solution using Stripe's Subscription Schedules API, which allows defining multiple pricing phases that transition automatically on specified dates.

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

- Automated a previously manual billing process
- Eliminated seasonal pricing errors
- Enabled customers to self-serve onboarding
- Provided transparent cost previews (reduces support inquiries)
- Built foundation for future admin dashboard

**Future Enhancements:**

The current implementation is a fully functional MVP. Planned expansions include:
- Customer authentication and self-service portal
- Admin dashboard for subscription management and analytics
- PostgreSQL integration for customer data and audit logs
- Email notifications for phase transitions
- Subscription modification flows (add/remove properties, pause service)`,
    keyMetrics: [
      {
        value: "Zero",
        label: "Webhook Failures",
        description:
          "Idempotent design handles Stripe's retry logic gracefully",
      },
      {
        value: "100%",
        label: "Automated Billing",
        description:
          "Eliminated manual billing process and seasonal pricing errors",
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
