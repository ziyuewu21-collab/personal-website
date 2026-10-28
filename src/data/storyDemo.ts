// Redrawn demo of the AI story-based vocabulary product (Ziyue's PM internship).
// The real product is not shown: no name, logo, URL, students or screenshots. Stories
// here are pre-written to show what the generator did; the real one wrote a new story
// from each student's interest tags. Flow follows Ziyue's own product flow chart.
// TODO(Ziyue): check the "why" notes match what you actually decided.

export const demoIntro = {
  label: "Redrawn demo · not the real product · stories pre-written",
  title: "Learn 5 words through a story about something you like",
  // The product bet, from the internship's own FAQ: word lists are all intentional
  // learning (fast, then forgotten); living abroad is all incidental (sticks, but slow).
  bet: "Word lists are fast but forgotten. Living abroad sticks but is slow. The bet: put the words in a story the learner cares about, then make them use the words.",
};

export const steps = [
  { id: "tags", name: "Pick interests", why: "Interest tags drive the story. Motivation first: a story about your thing, not a word list." },
  { id: "check", name: "Check words", why: "Sort known from new, so the lesson spends time on the words you actually need. (The real product ran a short level check first.)" },
  { id: "story", name: "Story", why: "Every target word appears in context, not as a list to memorise. Chinese support at first, then hidden once you can read without it." },
  { id: "retell", name: "Retell", why: "Output pushes input: the learner produces, not just receives. This is where the human coach mattered most, for confidence as much as accuracy." },
  { id: "test", name: "Fill the gaps", why: "Retrieval, not re-reading. Feedback waits until every gap is filled." },
  { id: "game", name: "Anti-forgetting game", why: "A quick second retrieval before the word counts as learned. Then a short report, the kind parents got after every lesson." },
];

export const words = [
  { en: "volunteer", zh: "志愿者" },
  { en: "rapid", zh: "迅速的" },
  { en: "advantage", zh: "优势" },
  { en: "medal", zh: "奖章" },
  { en: "peace", zh: "和平" },
];

type Story = { title: string; titleZh: string; high: string; low: string; zh: string; zhLow: string };

// Target words are wrapped in [brackets] so the component can highlight or blank them.
export const stories: Record<string, Story> = {
  football: {
    title: "The Fastest Pass",
    titleZh: "最快的传球",
    high: "Mia was the only [volunteer] who stayed after training. Her coach said her [rapid] passes were the team's biggest [advantage]. In the final she scored, and the whole school cheered as she lifted her [medal]. That night the two rival teams shook hands and made [peace].",
    low: "Mia is a [volunteer] at the club. She is [rapid]. Being fast is her [advantage]. She wins a [medal]. The two teams make [peace].",
    zh: "米娅是训练后唯一留下来的志愿者。教练说,她迅速的传球是球队最大的优势。决赛中她进了球,全校欢呼着看她举起奖章。那天晚上,两支对手球队握手言和,恢复了和平。",
    zhLow: "米娅是俱乐部的志愿者。她跑得很迅速。速度快是她的优势。她赢得了一枚奖章。两支球队和好了,恢复了和平。",
  },
  harrypotter: {
    title: "The Smallest Seeker",
    titleZh: "最小的找球手",
    high: "At Hogwarts, Ivy was the only first-year who would [volunteer] to be Seeker. The Golden Snitch was [rapid], but being small was an [advantage]: she could turn faster than anyone on a broom. When she caught it, the Headmaster pinned a [medal] on her robe, and for one night Gryffindor and Slytherin sat together in [peace].",
    low: "Ivy is at Hogwarts. She is a [volunteer] for Quidditch. The Snitch is [rapid]. Ivy is small. That is her [advantage]. She catches it and gets a [medal]. The two houses are at [peace].",
    zh: "在霍格沃茨,艾薇是唯一一个自愿当找球手的一年级新生。金色飞贼飞得很迅速,但个子小反而成了优势:她在扫帚上转身比谁都快。她抓住飞贼的那一刻,校长把一枚奖章别在她的长袍上。那一晚,格兰芬多和斯莱特林坐在一起,和平相处。",
    zhLow: "艾薇在霍格沃茨。她自愿参加魁地奇。金色飞贼很迅速。艾薇个子小,这是她的优势。她抓住了飞贼,得到一枚奖章。两个学院和平相处。",
  },
  minecraft: {
    title: "The Night Guard",
    titleZh: "守夜人",
    high: "In her Minecraft village, Rosa was a [volunteer] guard for the first night. A [rapid] creeper rushed out of the dark, but she had one [advantage]: she had built a wall that afternoon. In the morning the villagers gave her an emerald [medal], and the village lived in [peace] until the next sunset.",
    low: "Rosa plays Minecraft. She is a [volunteer] guard. A creeper comes. It is [rapid]. Rosa has a wall. That is her [advantage]. She gets a [medal]. The village is at [peace].",
    zh: "在《我的世界》的村庄里,罗莎自愿当第一晚的守卫。一只苦力怕迅速地从黑暗中冲了出来,但她有一个优势:那天下午她刚筑好一道墙。第二天早上,村民们送给她一枚绿宝石奖章,村庄一直很和平,直到下一次日落。",
    zhLow: "罗莎在玩《我的世界》。她自愿当守卫。一只苦力怕来了,它很迅速。罗莎有一道墙,这是她的优势。她得到一枚奖章。村庄很和平。",
  },
};

// Real learners' favourites, so the hook is the world they already love. The worlds are
// named; the characters and plots are original.
export const tags = [
  { id: "harrypotter", label: "Harry Potter", zh: "哈利·波特" },
  { id: "minecraft", label: "Minecraft", zh: "我的世界" },
  { id: "football", label: "Football", zh: "足球" },
];
export const tagsNote = "In the real product learners could type any interest. These three are examples.";

export const retellStarters = ["First, ...", "Then, ...", "Because ... , ...", "In the end, ..."];
