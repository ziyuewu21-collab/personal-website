// Teaching section data. Facts come from the CELTA End of Course Report (Teaching House,
// 9 Oct 2026) and Ziyue's CELTA input-session notes. Ratings below are copied box by box
// from the report: e = excellent, s = at standard, w = will require further attention.
// Don't round up a rating or add a claim the report doesn't make.

export const celta = {
  course: "Cambridge CELTA",
  centre: "Teaching House, London",
  dates: "14 Sept – 9 Oct 2026",
  hours: "120 hours, in person",
  modes: "Face-to-face, online and blended teaching",
  grade: "Pass B",
  gradeNote: "the grade above a standard pass",
  // Ziyue's own words (chat, 2026-10-28), lightly edited for grammar only.
  shift:
    "Before CELTA, I did most of the talking. CELTA made me realise the key to teaching is getting students engaged: take a step back, and let them think.",
};

export type Rating = "e" | "s" | "w";

export const report: { area: string; items: { text: string; rating: Rating }[] }[] = [
  {
    area: "Planning for different teaching contexts",
    items: [
      { text: "Identifying appropriate learning aims and outcomes", rating: "e" },
      { text: "Selecting and designing materials, activities and resources", rating: "s" },
      { text: "Presenting materials with a professional appearance", rating: "e" },
      { text: "Writing clear, detailed lesson plans with a logical order", rating: "s" },
      { text: "Allocating appropriate timing to each stage", rating: "s" },
      { text: "Balance, variety and a communicative focus", rating: "s" },
      { text: "Analysing language: meaning, form and phonology", rating: "e" },
      { text: "Anticipating difficulties and suggesting solutions", rating: "s" },
      { text: "Using language-systems terminology correctly", rating: "e" },
    ],
  },
  {
    area: "Awareness of teaching and learning",
    items: [
      { text: "Teaching with awareness of learners' needs, interests and backgrounds", rating: "s" },
      { text: "Teacher presence and manner, including voice and delivery", rating: "e" },
      { text: "Establishing rapport and ensuring all students are involved", rating: "e" },
    ],
  },
  {
    area: "Language skills and systems",
    items: [
      { text: "Grading my own language to the learners' level", rating: "s" },
      { text: "Identifying and correcting oral and written errors", rating: "s" },
      { text: "Clear contexts and a communicative focus for language", rating: "s" },
      { text: "Accurate and appropriate models of the language", rating: "e" },
      { text: "Clarifying meaning, form and phonology to the right depth", rating: "e" },
      { text: "Awareness of differences in formality", rating: "s" },
      { text: "Practice of language items", rating: "e" },
      { text: "Helping learners understand reading and listening texts", rating: "e" },
      { text: "Developing oral fluency and writing", rating: "s" },
    ],
  },
  {
    area: "Classroom teaching skills",
    items: [
      { text: "Arranging the classroom or virtual layout", rating: "s" },
      { text: "Setting up whole-class and group activities", rating: "s" },
      { text: "Choosing techniques to suit the lesson content", rating: "s" },
      { text: "Managing the learning process so aims are achieved", rating: "s" },
      { text: "Using materials, resources and technical aids to enhance learning", rating: "e" },
      { text: "Giving clear instructions", rating: "s" },
      { text: "Questioning to elicit and check understanding", rating: "s" },
      { text: "Giving learners feedback on tasks", rating: "s" },
      { text: "Keeping an appropriate pace", rating: "s" },
      { text: "Monitoring learners", rating: "s" },
    ],
  },
  {
    area: "Professionalism",
    items: [
      { text: "Orderly records; plans and assignments on time", rating: "s" },
      { text: "Noting my own strengths and weaknesses", rating: "s" },
      { text: "Participating in and responding to feedback", rating: "e" },
      { text: "Working with colleagues to plan teaching practice", rating: "s" },
      { text: "Working independently and taking responsibility", rating: "e" },
    ],
  },
];

// The weak spot, stated plainly. Source: report ("Giving clear instructions" = at
// standard) + the instruction-staging advice in the Lessons from the Classroom notes.
export const workingOn = {
  title: "Instructions",
  text: "Rated at standard, not excellent. What I'm practising: break instructions into single moves. Give one, let learners do it, then give the next. Give six at once and they keep the first, like driving directions after the first turn.",
};

// Classroom habit → the product decision it leads to. Sources: CELTA input sessions
// (task-based learning, needs analysis, guided discovery, instruction staging) and the
// MyTurn decisions already listed in projects.ts.
export type Principle = {
  habit: string;
  classroom: string;
  product: string;
  icon: "ear" | "question" | "steps" | "flag";
};

export const principles: Principle[] = [
  {
    habit: "Start with a needs analysis",
    classroom:
      "Before the syllabus, I find out why each learner needs English, what they enjoy and what they find hard.",
    product: "That's user research. I don't choose features before I've met the learner.",
    icon: "ear",
  },
  {
    habit: "Elicit before explaining",
    classroom:
      "I ask what learners already know and let them work the rule out from examples. I fill gaps; I don't lecture.",
    product: "A product should ask before it tells: open with a prompt, not a tutorial.",
    icon: "question",
  },
  {
    habit: "Instruct, then do",
    classroom: "One instruction, the action, then the next instruction. Never six at once.",
    product: "One step per screen in onboarding. Show step two once step one is done.",
    icon: "steps",
  },
  {
    habit: "Judge the task by its outcome",
    classroom:
      "In task-based learning (Prabhu, Willis), success means the task got done: the plan agreed, the problem solved. Accuracy comes after.",
    product:
      "MyTurn never corrects mid-conversation. Feedback waits until you finish and asks how your story landed, not how many errors you made.",
    icon: "flag",
  },
];

// Captions for the interactive classroom doodle (Classroom.astro).
export const classroomModes = {
  tl: {
    label: "Teacher-led",
    caption:
      "I explain the rule; they copy it down. Neat and quiet, and the students barely say a word in English.",
  },
  sc: {
    label: "Student-centred",
    caption:
      "They plan a day out together, in English. I set the task, monitor and take notes, and language feedback comes at the end.",
  },
};
