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
};

export const projects: Project[] = [
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
  {
    title: "MyTurn — storytelling speaking app",
    role: "Founder — currently building",
    description:
      "Scenario-based speaking practice that trains storytelling — having something to say — rather than vocabulary drills. Built on what I saw teaching IELTS: learners fail at real communication, not word lists.",
    result:
      "MVP in development at OpenAI Build Week (July 2026): one scenario, one round, AI feedback. Live link coming when it ships.",
    tags: ["Speaking", "AI feedback"],
    status: "building",
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
