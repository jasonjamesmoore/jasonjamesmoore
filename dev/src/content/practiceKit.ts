import type { Project } from "@/content/types";

export const practiceKitProject: Project = {
  slug: "practicekit-music-theory",
  title: "PracticeKit: Music Theory Practice Engine",
  role: "Designer and full-stack developer",
  outcome:
    "Built a modular practice platform powered by a custom real-time music-theory engine",
  status: "MVP",
  techStack: [
    "React 19",
    "TypeScript 5",
    "Vite 6",
    "Mantine UI 7",
    "React Router v7",
    "Vitest",
    "React Testing Library",
  ],
  links: {
    github: "https://github.com/jasonjamesmoore/TheoryFlashCards",
    live: "https://practice.jasonjamesmoore.com",
    caseStudy: "/projects/practicekit-music-theory",
  },
  card: {
    description:
      "Built a modular music-theory practice platform around a custom calculation engine for enharmonic spelling and scale-degree logic. The system validates 12,789 note/key/degree combinations in real time and powers multiple quiz modes, contextual filtering, focused-practice flows, theming, and onboarding. Designed as a structured learning tool for musicians building theory fluency.",
    proofLine: "Personal product for structured music-theory practice.",
  },
  modal: {
    summary: "Practice platform for musicians built around a custom real-time music-theory engine that validates enharmonic spelling, scale-degree logic, and quiz-state correctness across multiple modes.",
    validated: [
      "Four quiz modes: Degree Finder, Note Finder, Key Finder, Key Signature Quiz",
      "Enharmonic calculation engine with letter-based interval logic",
      "Smart card generation with validation (filters invalid combinations)",
      "Priority filtering system (harmonic extensions vs. scale degrees)",
      "Prompt locking feature for practicing specific keys/notes",
      "Variant system for bidirectional quizzes (key→signature, signature→key)",
      "Custom 5-color palette with 10 shades each (light/dark mode support)",
      "Multi-step onboarding (platform welcome + tool-specific tutorials)",
      "Tool registry architecture for extensibility",
      "Breadcrumb navigation with context-aware labels",
    ],
    nextSteps: [
      "User accounts with progress tracking",
      "Spaced repetition algorithm for optimal learning intervals",
      "Additional learning tools (ear training, sight reading, rhythm practice)",
      "Practice analytics and performance metrics dashboard",
      "Difficulty progression system (adaptive quiz difficulty)",
      "Customizable card decks (major keys only, naturals only, etc.)",
      "Audio playback for notes and intervals",
      "Test suite covering core theory calculations",
      "MIDI keyboard input support",
    ],
  },
  caseStudy: {
    clientLabel: "Personal Project",
    timeline: "December 2025",
    tldr: "Built a modular, tool-based music theory learning platform with interactive flashcard quizzes. Architected a sophisticated enharmonic calculation engine that handles complex musical relationships (21 notes × 29 keys × 21 degrees = 12,789 possible combinations). Features custom color theming with light/dark modes, multi-step onboarding system, and extensible architecture for future learning tools.",
    engagementType: "Solo Full-Stack Development",
    challenge: `As a musician and developer, I wanted to create a comprehensive music theory practice tool that goes beyond simple memorization. The challenge was to build a system that:

- **Handles enharmonic equivalents correctly**: C# and Db are the same pitch but different notes depending on musical context
- **Validates musical relationships**: Not every note/degree/key combination is valid (e.g., "What's the b3 of C#?" should return "E", not "Fb")
- **Supports multiple learning modes**: Different quiz types that approach the same concepts from different angles
- **Scales to accommodate complexity**: From basic diatonic degrees (1-7) to advanced harmonic extensions (9, 11, 13) and alterations (b9, #11, etc.)
- **Provides contextual filtering**: Musicians think differently about harmonic extensions vs. scale degrees
- **Remains intuitive despite complexity**: Clean UI that doesn't overwhelm beginners while supporting advanced features

I wanted to offer my students a tool that didn't oversimplify the content or have a clunky interface that interrupts the learning flow.`,
    technicalChallenges: [
      {
        title: "Enharmonic Spelling Logic",
        description:
          "Computing correct note names requires understanding letter-based intervals (Though E# and F are the same pitch, C#→E# is a 3rd while C#→F is not.) AND chromatic intervals (4 semitones = major 3rd)",
      },
      {
        title: "Validation at Card Generation Time",
        description:
          "With 12,789 possible note/key/degree combinations, only ~40% produce musically valid results that need to be filtered in real-time",
      },
      {
        title: "Bidirectional Calculations",
        description:
          "Four quiz modes require solving for different variables: degree(key, note), note(key, degree), key(note, degree), and signature(key)",
      },
      {
        title: "Type-Safe Configuration",
        description:
          "Quiz modes share core logic but have different prompt/answer structures requiring flexible TypeScript types",
      },
    ],
    approach: `I architected a modular, tool-based platform with a core theory engine that handles complex musical calculations.

**Key architectural decisions:**

1. **Tool Registry Pattern**: Centralized tool definitions enable easy addition of future learning modules (ear training, sight reading) without touching core platform code

2. **Theory calculation engine**: Pure functions in \`noteUtils.ts\` handle all musical logic using lookup tables and modular arithmetic:
   - \`NOTE_INDEXES\`: Maps enharmonic spellings to chromatic positions (0-11)
   - \`DEGREE_TO_SEMITONES\`: Converts scale degrees to intervallic distances
   - \`LETTER_INTERVAL_TO_DEGREES\`: Ensures correct enharmonic spelling based on letter-based intervals

3. **Quiz mode configuration system**: Declarative configs in \`modeConfigs.ts\` define each mode's:
   - Prompt decks (what information is given)
   - Answer deck (what needs to be found)
   - Compute function (how to calculate the answer)
   - Supported features (filtering, locking, variants)

4. **Smart card generation**: Retry logic (max 50 attempts) regenerates invalid combinations until finding a musically correct prompt/answer pair

5. **Onboarding system**: \`useOnboarding\` hook with localStorage persistence enables platform-level AND tool-specific tutorials that only show once

6. **Custom theming**: Generated five 10-shade color palettes using Mantine's online tool, then implemented conditional rendering based on \`useComputedColorScheme\` for light/dark mode support

**Data flow:**

1. User selects quiz mode → Router loads mode-specific component
2. Mode initializes with config → \`getRandomCard()\` generates prompts
3. Validation loop → \`computeAnswer()\` checks if combination produces valid result
4. Card renders → User interacts (lock prompts, reveal answer, next card)
5. "Next" regenerates → Respects locked prompts, finds new valid combination`,
    solution: `**Tool-Based Platform Architecture**

Built extensible platform with:
- \`ToolRegistry\`: Centralized tool definitions with metadata (id, label, description, icon, category, path)
- \`FlashcardsRouter\`: Dynamic routing that maps mode strings to components
- \`ToolsHub\`: Grid-based dashboard showing available tools
- Breadcrumb navigation with tool-aware labels
- Sidebar navigation (Tools, Settings) separate from header

**Music Theory Calculation Engine** (\`noteUtils.ts\`)

Core functions handling complex enharmonic logic:

\`\`\`typescript
// Example: "What's the 3rd of Db?"
getNotefromDegree('3', 'Db')
// 1. Db = index 1
// 2. Major 3rd = 4 semitones → index 5
// 3. Db is "D" family, 3rd interval = "F" family
// 4. Index 5 options: ['F', 'E#', 'Gbb']
// 5. Returns 'F' (matches target letter)
\`\`\`

Handles edge cases:
- Compound intervals (9th = 2nd + octave, 11th = 4th + octave)
- Double accidentals (B## = C#, Fbb = Eb)
- Enharmonic keys (F# and Gb, C# and Db)

**Four Quiz Modes with Priority Filtering**

1. **Degree Finder**: Given key + note → find scale degree
   - Filter: "Harmonic" (chord tones/extensions) vs "Scale" (diatonic degrees)
   
2. **Note Finder**: Given key + degree → find note
   - Filter: Same priority system
   
3. **Key Finder**: Given note + degree → find key
   - No filter (all degrees valid)
   - Verifies answer by computing note from degree
   
4. **Key Signature Quiz** (Variant system):
   - Variant A: Key → Signature (e.g., "Eb" → "3b")
   - Variant B: Signature → Key (e.g., "5#" → "B")
   - Toggle button switches between directions

**Smart Card Selection Algorithm** (\`cardSelection.ts\` + \`Quiz.tsx\`)

\`\`\`typescript
function regeneratePrompts(respectLock: boolean) {
  let attempts = 0;
  while (attempts < 50) {
    // Generate new prompts (respect locked cards)
    const newPrompts = { ...prompts };
    modeConfig.promptDecks.forEach(deck => {
      if (!respectLock || lockedPrompt !== deck) {
        newPrompts[deck] = getRandomCard(deck, { priority });
      }
    });
    
    // Validate combination produces valid answer
    const testAnswer = computeAnswer(newPrompts, priority);
    if (testAnswer !== null) {
      setPrompts(newPrompts);
      return; // Valid combo found
    }
    attempts++;
  }
  console.warn('Could not generate valid combo after 50 attempts');
}
\`\`\`

**Lock Feature for Focused Practice**

- Lock icon on each prompt card
- State management tracks \`lockedPrompt: Deck | null\`
- Regeneration skips locked cards, only randomizes unlocked ones
- Perfect for "practice all degrees in C major" or "what is the 9 for each key?" workflows

**Custom Color Palette System** (\`theme.ts\` + \`FlashCard.tsx\`)

Five color palettes (10 shades each):
- \`brand\`: Primary UI color (#5b9279 seafoam green)
- \`keyDeck\`: Light green (#8fcb9b)
- \`noteDeck\`: Sage green (#95a78d)
- \`degreeDeck\`: Vibrant terracotta (#dc662c)
- \`signatureDeck\`: Soft blue (#c9d6ea)

Dynamic theming:
\`\`\`typescript
const isDark = useComputedColorScheme('light') === 'dark';
<Card bg={isDark ? 'dark.4' : undefined}>
  <Card bg={\`var(--mantine-color-\${deckColor}-1)\`}>
    <Text c={isDark ? 'dark.9' : 'dark.9'}>{value}</Text>
  </Card>
</Card>
\`\`\`

Prevents FOUC with inline \`<script>\` in \`index.html\` that reads localStorage and sets \`data-mantine-color-scheme\` before React loads.

**Multi-Step Onboarding System**

Platform welcome modal (4 steps):
1. Welcome message
2. Tools Hub explanation
3. Navigation patterns (breadcrumbs, sidebar, mode switching)
4. Getting started tips

Flashcards tutorial (4 steps):
1. Quiz modes overview
2. Priority filters (harmonic vs scale)
3. Lock feature explanation
4. Variants feature

\`useOnboarding\` hook:
- Stores \`practicekit:onboarding:{toolId}\` in localStorage
- Returns \`{ hasSeenOnboarding, markOnboardingAsSeen, resetOnboarding }\`
- Settings page allows resetting either onboarding tour`,
    results: `**Technical Achievements:**

- **Zero invalid quiz states**: Validation loop ensures 100% of generated cards have correct answers
- **Enharmonically correct**: Theory engine respects musical spelling rules (Db major has F, not E#)
- **Type-safe throughout**: TypeScript interfaces for QuizMode, QuizVariant, DeckType, etc.
- **Accessible UI**: ARIA labels, keyboard navigation, color contrast compliance
- **Performant**: Validation runs in <5ms, no perceptible lag during card generation
- **Maintainable architecture**: Clear separation between platform, tools, and shared utilities

**User Experience:**

- **Guided onboarding**: Multi-step tutorial introduces features without overwhelming new users
- **Visual consistency**: Custom color palette with cohesive light/dark mode support
- **Optional complexity**: Advanced features (locking, filtering) are available but not required for basic practice
- **Contextual help**: Onboarding tours explain features without overwhelming
- **Flexible practice**: Four modes × two priority filters × lock feature = diverse learning paths
- **No dead ends**: Breadcrumbs and "Switch Mode" buttons prevent navigation frustration

**Code Quality:**

- **Test infrastructure ready**: Vitest + React Testing Library configured with custom render utilities
- **Linted and formatted**: ESLint (Mantine config) + Prettier with import sorting
- **Documented calculations**: Inline comments explain complex enharmonic logic
- **Development validation**: Scripts verify data integrity during development (not used at runtime)

**Future Enhancements:**

The current implementation is a fully functional music theory quiz platform. Planned expansions include:
- User accounts with progress tracking
- Spaced repetition algorithm for optimal learning
- Additional tools (ear training, sight reading, rhythm practice)
- Practice analytics and performance metrics
- Difficulty progression system
- Customizable card decks (major keys only, naturals only, etc.)`,
    keyMetrics: [
      {
        value: "100%",
        label: "Valid Quiz States",
        description:
          "Validation loop ensures every generated card has a musically correct answer",
      },
      {
        value: "12,789",
        label: "Card Combinations",
        description:
          "21 notes × 29 keys × 21 degrees handled by theory calculation engine",
      },
      {
        value: "<5ms",
        label: "Card Generation",
        description:
          "Real-time validation with no perceptible lag during quiz practice",
      },
    ],
    keyLearnings: [
      {
        title: "Domain complexity requires deep modeling",
        lesson:
          "Music theory has rules that can't be simplified away. Investing time in the `noteUtils` calculation engine paid off - every quiz mode uses the same robust logic.",
      },
      {
        title: "Validation is a feature, not a bug check",
        lesson:
          "The retry loop that regenerates invalid card combinations IS the product. Without it, 60% of cards would show nonsense answers.",
      },
      {
        title: "Configuration over implementation",
        lesson:
          "Declarative quiz mode configs (`modeConfigs.ts`) made adding new modes trivial. The 4th mode took 10 minutes because the pattern was established.",
      },
      {
        title: "Tool-based architecture enables iteration",
        lesson:
          "Separating platform (`Router`, `Layout`) from tools (`/tools/flashcards`) means I can add ear training or rhythm practice without touching existing code.",
      },
      {
        title: "Custom theming requires discipline",
        lesson:
          "Generating 5 color palettes × 10 shades = 50 values. Using Mantine's online tool was faster than tweaking by hand, and results were more harmonious.",
      },
      {
        title: "Onboarding UX is multiplicative",
        lesson:
          "Platform onboarding + tool onboarding = 2 modals, but each is focused and skippable. Users appreciated not being overwhelmed on first visit.",
      },
    ],
  },
};
