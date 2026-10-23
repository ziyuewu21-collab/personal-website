// The page is laid out as a CELTA lesson plan. Each section is one stage; the HUD at the
// bottom of the screen shows the current stage, who's talking, and a lesson clock driven
// by scroll. T = teacher (me), Ss = students (you). A good lesson moves the talking from
// T to Ss, and so does the page: it ends with the visitor writing to me.
// `id` must match a section id in index.astro. teacherTalk is illustrative, not data.

export const lessonMinutes = 45;

export type Stage = {
  id: string;
  n: string;
  name: string;
  interaction: string;
  teacherTalk: number; // 0–100, drives the talk-time meter
  minutes: number; // stage length in the plan; all stages add up to lessonMinutes
};

export const stages: Stage[] = [
  { id: "top", n: "01", name: "Lead-in", interaction: "T → Ss", teacherTalk: 85, minutes: 5 },
  { id: "projects", n: "02", name: "Context", interaction: "T → Ss", teacherTalk: 70, minutes: 10 },
  { id: "teaching", n: "03", name: "Task", interaction: "Ss ↔ Ss", teacherTalk: 25, minutes: 15 },
  { id: "research", n: "04", name: "Language focus", interaction: "T ↔ Ss", teacherTalk: 45, minutes: 10 },
  { id: "contact", n: "05", name: "Feedback", interaction: "Ss → T", teacherTalk: 10, minutes: 5 },
];

export const planExplainer =
  "This page is laid out like a CELTA lesson plan. Every plan lists its stages, who's talking (T = teacher, Ss = students) and the timing. A good lesson moves the talking from the teacher to the students. So does this page: by the end, it's your turn.";

// Contact chat (ChatContact.astro). {name} is replaced with what the visitor typed.
export const chat = {
  hello: "Hi! Ziyue here. Who am I chatting with?",
  namePlaceholder: "Your name",
  askMessage: "Nice to meet you, {name}! What's on your mind? A role, a project, or just hello.",
  messagePlaceholder: "Your message",
  done: "Thanks, {name}. Tap below and your email app opens with this message, addressed to me.",
  sendLabel: "Open in my email app",
  restart: "Start over",
};
