// Project cards for the Projects section. Facts derive from 2-JOB-HUNT/assets/master-cv.md
// or from what Ziyue confirmed in chat (logged in BUILD-PLAN.md) — never add numbers or claims
// from anywhere else. Anonymization rule (SPEC.md):
// the Shenzhen product is called "AI story-based vocabulary product", no company name.

export type Project = {
  title: string;
  role: string;
  description: string;
  result: string;
  tags: string[];
  status?: "shipped" | "building" | "prototype" | "published";
  // Optional outbound links (live product, demo video, repo). Same rule as site.ts:
  // omit the array or leave it empty and the card renders no link row.
  links?: { label: string; url: string }[];
  // Optional interactive demo (a desk window id). The vocab product's is a redraw, not the real UI.
  demo?: { id: string; label: string };
};

export const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  shipped: "Shipped",
  building: "Building now",
  prototype: "Prototype",
  published: "Open source",
};

export const projects: Project[] = [
  {
    title: "MyTurn — speaking practice with the people in your life",
    role: "Founder — concept, spec and prompt design; code written with Codex (GPT-5.6)",
    description:
      "You describe someone you actually know; the AI speaks as them, in first person. Nothing is corrected mid-conversation — feedback waits until you finish, and it asks how the story landed rather than counting grammar errors. Built on what I saw teaching IELTS: learners fail at real communication, not word lists.",
    result:
      "A prototype, not a product yet: built for OpenAI Build Week 2026 (Education track). The vision, a living map of the people in your life that you can practise with, needs technology that doesn't exist yet. Every choice in the prototype — no turn limit, no mid-conversation correction, no invented memories — traces to research on social interaction in language learning.",
    tags: ["Speaking", "AI roleplay", "Vision"],
    status: "prototype",
    links: [
      { label: "Demo video", url: "https://www.youtube.com/watch?v=HYlbiHjeg0E" },
      { label: "Code on GitHub", url: "https://github.com/ziyuewu21-collab/myturn" },
    ],
  },
  {
    title: "AI story-based vocabulary product",
    role: "PM intern — owned the company's first consumer product, reporting to the CEO. I also taught on it as a coach.",
    description:
      "0→1 build of an AI English-learning product pairing personalized story generation with human coaching. Designed the trial-lesson flow and turned AI's unpredictability into a feature: story co-creation between the student and the AI. Wrote the 45-question parent FAQ that turned the learning logic into plain answers to parents' real worries: results, story safety, and how the AI and the coach split the work.",
    result:
      "81% trial-to-paid conversion in the first (small, warm-lead) cohort — the key evidence for the consumer business model. Shipped four iterations, including parent feedback reports and free-form interest tags. In my own lessons, a Grade 4 student who avoided studying started learning words on their own, and a Grade 2 student who wouldn't speak started speaking English by choice.",
    tags: ["0 → 1", "User research", "AI product"],
    status: "shipped",
    demo: { id: "storydemo", label: "Try the core flow (redrawn)" },
  },
  {
    title: "Critical Thinking: Academic Read / Write / Review",
    role: "Designer — four Claude Code skills, built for my own MSc work and tuned against my marked feedback",
    description:
      "Most AI tools for academic work hand you the deliverable. These four do the opposite: automate the drudge, protect the muscle. They find papers, point to the exact page and flag overclaims, but never summarise a paper, never write a paragraph, never rewrite a draft. The reading skill gives the page and the first words of a sentence, never the sentence itself: a quote pasted into the chat is a quote you read instead of the paper.",
    result:
      "Open source (CC BY-NC 4.0). The same rule as my classroom: the learner produces the answer; the tool clears away everything that isn't thinking.",
    tags: ["AI for learning", "Learning design", "Claude Code"],
    status: "published",
    links: [{ label: "Code on GitHub", url: "https://github.com/ziyuewu21-collab/critical-thinking-academic-read-write-review" }],
  },
  {
    title: "B2G medical records system",
    role: "PM intern — requirements and AI-workflow lead on a government tender",
    description:
      "Decomposed 130 requirement points into specs for 5 user roles across web and mobile. Led AI adoption across delivery: a GPT-4o prompt framework produced a 90,000-character technical bid ~50% faster, with Cursor prototypes and 70 UI screens coordinated in MasterGo.",
    result: "Bid passed review.",
    tags: ["B2G", "Requirements analysis", "AI workflows"],
    status: "shipped",
  },
];

// Research → Product section. Same rule: facts from master-cv.md only.
export type ResearchItem = {
  finding: string;
  takeaway: string;
};

export const research: ResearchItem[] = [
  {
    finding:
      "My MSc dissertation (UCL, multimodal communication lab) manipulates active vs. passive roles in paired word learning. Preliminary result: actively-learned words are remembered better.",
    takeaway:
      "Learner participation isn't engagement garnish — it's the memory mechanism. Products should make the learner produce, not just receive.",
  },
  {
    finding:
      "Lab work on a longitudinal child language corpus: coding gesture and speech together in ELAN. Communication develops as a multimodal, social loop long before vocabulary tests notice.",
    takeaway:
      "Tools that only count words miss where learning actually happens. Interaction is the unit of progress, not vocabulary size.",
  },
];

// Interactive pair doodle in the Research section (PairLearning.astro).
export const pairDemo = {
  listen: {
    label: "Just listening",
    caption: "One person explains. The other nods along.",
  },
  active: {
    label: "Taking part",
    caption:
      "The learner asks, gestures and explains it back. They look at the thing, then at each other.",
  },
};
