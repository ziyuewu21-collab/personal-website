// Ziyue's Desk (the homepage). Everything the desk says lives here: icons, the guided
// tour, the lesson-plan sticky note, the easter eggs and the Moonish word game.
// Facts come from site.ts / projects.ts / teaching.ts; this file is voice and layout.

export type IconKind = "app" | "folder" | "board" | "flask" | "pdf" | "chat" | "secret" | "trash" | "game" | "auction" | "txt";

export type DeskItem = {
  id: string; // window id
  label: string; // file name under the icon
  icon: IconKind;
  loose?: boolean; // sits apart from the icon grid (the secret file, the trash)
};

// Grid order, three per row on desktop.
export const items: DeskItem[] = [
  { id: "myturn", label: "MyTurn.app", icon: "app" },
  { id: "classroom", label: "Classroom.app", icon: "board" },
  { id: "resume", label: "Resume.pdf", icon: "pdf" },
  { id: "work", label: "Work", icon: "folder" },
  { id: "lab", label: "Lab notes", icon: "flask" },
  { id: "chat", label: "Say hi.chat", icon: "chat" },
  { id: "games", label: "Classroom games", icon: "game" },
  { id: "about", label: "about_me.txt", icon: "txt" },
  { id: "answers", label: "answer_key.pdf", icon: "secret", loose: true },
  { id: "trash", label: "Trash", icon: "trash", loose: true },
];

// Window titles (shown in the title bar).
export const titles: Record<string, string> = {
  myturn: "MyTurn.app",
  work: "Work",
  storydemo: "Story lesson (redrawn demo)",
  classroom: "Classroom.app",
  lab: "Lab notes",
  resume: "Resume.pdf",
  chat: "Say hi.chat",
  games: "Classroom games",
  about: "about_me.txt",
  game: "Moonish.game",
  auction: "Grammar Auction",
  guess: "Guess my word",
  answers: "answer_key.pdf",
  trash: "Trash",
};

// The yellow sticky note. Each row ticks when its window has been opened.
export const plan = {
  title: "Today's lesson plan",
  minutes: "2 min",
  rows: [
    { id: "myturn", label: "What I'm building" },
    { id: "classroom", label: "How I teach" },
    { id: "lab", label: "Why it works" },
    { id: "resume", label: "My resume" },
    { id: "chat", label: "Your turn to talk" },
  ],
  aim: "Aim: you can say what I build, and why.",
};

// The guide. One instruction at a time; each step waits until its file is opened.
export const tour = {
  hello: "Hi, I'm Ziyue! This is my desk. Want a 2-minute tour? I point, you click.",
  welcomeBack: "Welcome back! Want the tour again, or straight to my resume?",
  start: "Show me around",
  skip: "Just the resume",
  next: "Next",
  later: "skip this step",
  steps: [
    {
      target: "myturn",
      say: "Lesson one: what I'm building. Open MyTurn.app.",
      after: "MyTurn is a prototype of a bigger idea: speaking practice with the people in your life. Every design choice comes from my classroom.",
    },
    {
      target: "classroom",
      say: "Now my classroom. Open it and flip the switch.",
      after: "Go on, flip the switch from teacher-led to student-centred.",
      task: "See? Now they're talking. That's how I teach, and how I build.",
    },
    {
      target: "lab",
      say: "Why does that work? It's in my lab notes.",
      after: "Robots learn bottom-up, LLMs top-down. Humans? Both. Click through the three learners.",
    },
    {
      target: "resume",
      say: "Everything on one page: my resume.",
      after: "That's the short version. Last stop next.",
    },
    {
      target: "chat",
      say: "Your turn to talk. Open the chat.",
      after: "Lesson complete! You can now say what I build, and why.",
    },
  ],
  tease: "Psst. There's one file on this desk students never get to open...",
  restart: "Tour again",
  pokes: [
    "Instruction check: do you need to open every file? No. Just follow the arrow.",
    "你好! I'm your guide today.",
    "Sorry, CELTA habit. I ask before I tell.",
    "Tap the yellow note to jump anywhere.",
  ],
};

export const answerKey = {
  big: "Nice try.",
  lines: [
    "In my classroom nobody gets the answer key. You work it out first, then we check it together.",
    "CELTA calls it guided discovery. I call it the only way it sticks.",
    "Your first clue: follow the arrow.",
  ],
};

export const trash = [
  { file: "red_pen.png", note: "Retired. I stopped correcting people mid-sentence. MyTurn doesn't either." },
  { file: "word_list_FINAL_v3.xlsx", note: "Word lists alone don't make anyone fluent. Conversations do." },
  { file: "six_instructions_at_once.txt", note: "Deleted after CELTA feedback. One instruction, then the action." },
];

// Moonish: three made-up words. dax and wug are classics of word-learning research
// (Berko's wug test); toma is ours. One instruction per screen; feedback waits for the end.
export const game = {
  intro: "Learn 3 words of Moonish in 30 seconds. One rule: just follow my instructions.",
  play: "Play",
  noThanks: "No thanks",
  words: [
    { word: "toma", object: "blob", mode: "told", say: "This is a toma. Just look." },
    { word: "dax", object: "spinner", mode: "guess", say: "Which one is the dax? Watch my hand.", gesture: "spin" },
    { word: "wug", object: "bird", mode: "guess", say: "Which one is the wug? Watch my hand.", gesture: "hop" },
  ],
  gotIt: "Got it",
  checkIntro: "Quick check. No hints this time.",
  checkSay: "Which one is the {word}?",
  resultTitle: "You remembered {score} of 3.",
  result:
    "You were just told one word and worked out two with my help. Words you work out with someone usually stick better. That's what my dissertation tests.",
  again: "Play again",
};

// Resume window. Experience comes from projects.ts; this is the education block.
// TODO(Ziyue): confirm the exact UCL programme name and add dates.
export const education = [
  {
    what: "MSc, Language and Speech Science",
    where: "University College London (UCL)",
    note: "Dissertation: active vs. passive roles in paired word learning (multimodal communication lab)",
  },
];

// Grammar Auction: a CELTA controlled-practice game ("grammar gamble"; gambling can be
// taboo in some classrooms, so it's an auction). The first sentence is done together as
// the example; each round is one decision at a time; corrections wait for the end, in red pen.
export const auction = {
  intro: "Grammar Auction, from my CELTA classroom. Some sentences are wrong. Bet coins on how sure you are.",
  start: "Start",
  coins: 10,
  example: {
    text: "If it's sunny tomorrow, John will go to the park.",
    say: "Let's do the first one together. It's correct, and I'm very sure, so I bet 3 coins.",
  },
  items: [
    { text: "If John goes to the park, someone will join him.", correct: true },
    { text: "If someone will join him, they will play cards.", correct: false, wrong: "will join", right: "joins" },
    { text: "John used to drink bubble tea every day.", correct: true },
    { text: "She have taught English in London.", correct: false, wrong: "have", right: "has" },
  ],
  yourTurn: "Your turn.",
  ask: "Correct or wrong?",
  bet: "How sure are you?",
  bets: ["1 · a bit", "2 · fairly", "3 · very"],
  check: "Let's check together.",
  result: "You finished with {coins} coins.",
  why: "That's controlled practice: accuracy first, feedback at the end. Next comes freer practice, where you use it for real.",
  freer: "Freer practice. Finish my sentence:",
  stem: "If I hire Ziyue, ",
  placeholder: "she will...",
  praise: "Lovely first conditional.",
  nudge: "Nice! Tiny tip: first conditional is if + present, then will + verb.",
  send: "Send it to Ziyue",
  again: "Play again",
};

// The "Classroom games" folder: three 30-second games, each one a CELTA technique.
export const games = [
  { id: "guess", name: "Guess my word", blurb: "Three clues, one at a time. Eliciting: you find the word, I don't hand it over." },
  { id: "auction", name: "Grammar Auction", blurb: "Bet coins on sentences. Controlled practice, with feedback at the end." },
  { id: "game", name: "Moonish", blurb: "Learn three made-up words. Feel why taking part beats being told." },
];

// Guess my word: clues come one at a time; fewer clues used = more stars.
// Every answer is something true about Ziyue (or her desk). Bilingual: each option shows
// English and Chinese, and the reveal adds pinyin, so you leave with four Chinese words.
export const guess = {
  intro: "I'll describe a word. Pick it as soon as you know it. Fewer clues, more stars. 猜猜我说的是哪个词?",
  start: "Start",
  another: "Another clue",
  words: [
    {
      answer: "cardigan",
      options: [
        { en: "cardigan", zh: "开衫", py: "kāishān" },
        { en: "umbrella", zh: "雨伞", py: "yǔsǎn" },
        { en: "scarf", zh: "围巾", py: "wéijīn" },
        { en: "backpack", zh: "背包", py: "bēibāo" },
      ],
      clues: ["You wear it.", "It has buttons down the front.", "It's yellow in every drawing of me."],
    },
    {
      answer: "feedback",
      options: [
        { en: "homework", zh: "作业", py: "zuòyè" },
        { en: "feedback", zh: "反馈", py: "fǎnkuì" },
        { en: "grammar", zh: "语法", py: "yǔfǎ" },
        { en: "a test", zh: "考试", py: "kǎoshì" },
      ],
      clues: ["Teachers give it. Learners need it.", "My CELTA tutors gave me lots of it.", "In MyTurn, it waits until you finish talking."],
    },
    {
      answer: "gesture",
      options: [
        { en: "accent", zh: "口音", py: "kǒuyīn" },
        { en: "gesture", zh: "手势", py: "shǒushì" },
        { en: "dictionary", zh: "词典", py: "cídiǎn" },
        { en: "spelling", zh: "拼写", py: "pīnxiě" },
      ],
      clues: ["You do it with your hands.", "It helps people learn new words.", "I code it frame by frame in my lab work."],
    },
    {
      answer: "London",
      options: [
        { en: "Beijing", zh: "北京", py: "Běijīng" },
        { en: "Shenzhen", zh: "深圳", py: "Shēnzhèn" },
        { en: "London", zh: "伦敦", py: "Lúndūn" },
        { en: "Cambridge", zh: "剑桥", py: "Jiànqiáo" },
      ],
      clues: ["It's a city.", "I did my CELTA here.", "It's on the clock in the menu bar."],
    },
  ],
  right: "Yes! {zh} ({py}) means {en}.",
  wrong: "Not quite. Here's another clue.",
  reveal: "It was {en}: {zh} ({py}).",
  next: "Next word",
  result: "You got {stars} of {max} stars.",
  bonus: "Bonus: you just learned four words of Chinese too:",
  why: "That's eliciting: I give clues, you find the word. Words you find yourself stick better than words I hand you.",
  again: "Play again",
};
