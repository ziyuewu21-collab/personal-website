// Project cards for the Projects section. Facts derive from 2-JOB-HUNT/assets/master-cv.md —
// never add numbers or claims that aren't in that file. Anonymization rule (SPEC.md):
// the Shenzhen product is called "AI story-based vocabulary product", no company name.

export type Project = {
  title: string;
  role: string;
  description: string;
  result: string;
  tags: string[];
  status?: "shipped" | "building";
  // Optional outbound links (live product, demo video, repo). Same rule as site.ts:
  // omit the array or leave it empty and the card renders no link row.
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "MyTurn — speaking practice with the people in your life",
    role: "Founder — product, spec and shipping; code written by AI to my spec",
    description:
      "You describe someone you actually know; the AI speaks as them, in first person. Nothing is corrected mid-conversation — feedback waits until you finish, and it asks how the story landed rather than counting grammar errors. Built on what I saw teaching IELTS: learners fail at real communication, not word lists.",
    result:
      "Shipped and submitted to OpenAI Build Week 2026 (Education track), built with GPT-5.6 and Codex. Every product decision — no turn limit, no mid-conversation correction, no invented memories — traces to research on social interaction in language learning.",
    tags: ["Speaking", "AI roleplay", "0 → 1"],
    status: "shipped",
    links: [
      { label: "Live product", url: "https://myturn-nine.vercel.app" },
      { label: "Demo video", url: "https://www.youtube.com/watch?v=HYlbiHjeg0E" },
    ],
  },
  {
    // Facts from Ziyue (2026-11) and the public repo's SKILL.md files — add to master-cv.md too.
    title: "Critical reading & writing toolkit — AI that asks instead of answers",
    role: "Designer — diagnosis, learning design and prompt design; open source",
    description:
      "Built from my own marked work: seven assignments across a wide grade range, traced to five recurring ways I lost marks. Two shaped the design — claims that outran the evidence, and a critical review that listed weaknesses but no strengths. Four tools cover choosing sources, close reading, drafting and self-review, on one rule: automate the searching and formatting, leave the reading, judging and writing to the student. The reading tool gives only the page and the opening words of a passage, never its content; every paper needs one weakness and one strength, each backed by evidence.",
    result:
      "Every essay I have written with the toolkit has scored 70+ (First-class / Distinction in UK marking). None of the tools summarises a paper, writes a paragraph or rewrites a draft.",
    tags: ["Critical thinking", "Academic writing", "AI in learning"],
    status: "shipped",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/ziyuewu21-collab/critical-thinking-academic-read-write-review",
      },
    ],
  },
  {
    title: "AI story-based vocabulary product",
    role: "PM intern — owned the company's first consumer product, reporting to the CEO",
    description:
      "0→1 build of an AI English-learning product pairing personalized story generation with human coaching. Designed the trial-lesson flow and turned AI's unpredictability into a feature: story co-creation between the student and the AI.",
    result:
      "81% trial-to-paid conversion in the first (small, warm-lead) cohort — the key evidence for the consumer business model. Shipped four iterations, including parent feedback reports and free-form interest tags.",
    tags: ["0 → 1", "User research", "AI product"],
    status: "shipped",
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
