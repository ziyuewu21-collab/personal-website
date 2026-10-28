// How people learn: the Lab notes explainer (robot / LLM / human) and about_me.txt.
// The explainer follows the seminar talk Ziyue's supervisor gave to robotics and AI
// researchers: is human learning bottom-up or top-down? Her answer: both.
// Keep claims at the level the talk made them; no unpublished numbers.

// TODO(Ziyue): confirm the supervisor credit line and label the two recordings.
export const talk = {
  credit: "From my supervisor Prof. Gabriella Vigliocco's seminar for robotics and AI researchers (UCL).",
  links: [
    { label: "Recording 1", url: "https://www.youtube.com/watch?v=YzYUb_PS2yw&t=2406s" },
    { label: "Recording 2", url: "https://www.youtube.com/watch?v=kPc_WsaFMVo&t=2255s" },
  ],
};

export const learners = {
  question: "Who learns a new word best?",
  answer: "Bottom-up or top-down? Both.",
  tabs: [
    {
      id: "robot",
      label: "Robot",
      way: "bottom-up",
      caption:
        "Starts from raw input: pixels and sound. To learn what a dax is, it needs to see one again, and again, and again.",
    },
    {
      id: "llm",
      label: "LLM",
      way: "top-down",
      caption:
        "Starts from text. It has read far more words than any child will ever hear, and it has never once held a dax.",
    },
    {
      id: "human",
      label: "Human",
      way: "both",
      caption:
        "Uses both: the words around it and the thing in front of them. Plus someone pointing, gesturing, checking: \"like this?\" So we need far less input.",
    },
  ],
};

export const ingredients = [
  {
    title: "Multimodal input",
    zh: "多模态输入",
    text: "Pointing, gaze, holding the thing, and gestures that act it out. Gestures help with what a word means; how it sounds comes from hearing it.",
  },
  {
    title: "Multimodal interactivity",
    zh: "多模态互动",
    text: "The learner isn't a passive receiver. Questions, nods, \"uh-huh\", looking at each other. In the lab's studies, learning live beat watching the same thing recorded.",
  },
];

export const forProducts = {
  title: "So, for AI tutors (and my products)",
  text: "The talk ended on intelligent tutors: notice whether the learner is engaged, and let them take part. That's MyTurn's brief. The learner talks, the AI adapts, feedback waits.",
};

// about_me.txt. Written from what Ziyue said about how she learns.
export const aboutMe = {
  heading: "我是谁? who am i?",
  intro: "I'm endlessly curious about people: how they learn, how they talk, and how they get things wrong.",
  rows: [
    {
      q: "How I learn",
      a: "Big picture first. I ask \"why is it built this way?\" before I memorise anything. Rote memorisation and I don't get along.",
    },
    {
      q: "Proof that \"learner types\" are fuzzy",
      a: "I can hold a whole system in my head, and still get lost on the way out of a tube station. (路痴, officially.)",
    },
    {
      q: "The science bit",
      a: "Pashler and colleagues (2008) found no solid evidence that matching teaching to a \"learning style\" improves learning. So I don't design for \"visual learners\". I design for the task.",
    },
    {
      q: "Example: learning SQL",
      a: "Understand the whole first: picture the tables and how they join. Then practise the steps in order: FROM → WHERE → GROUP BY → SELECT. Global to understand, sequential to do.",
    },
    {
      q: "Favourite design style",
      a: "HEYTEA's line drawings. You may have noticed.",
    },
  ],
};
