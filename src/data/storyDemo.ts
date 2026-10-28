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

type Story = { title: string; titleZh: string; high: string; low: string; zh: string };

// Target words are wrapped in [brackets] so the component can highlight or blank them.
export const stories: Record<string, Story> = {
  football: {
    title: "The Fastest Pass",
    titleZh: "最快的传球",
    high: "Mia was the only [volunteer] who stayed after training. Her coach said her [rapid] passes were the team's biggest [advantage]. In the final she scored, and the whole school cheered as she lifted her [medal]. That night the two rival teams shook hands and made [peace].",
    low: "Mia is a [volunteer] at the club. She is [rapid]. Being fast is her [advantage]. She wins a [medal]. The two teams make [peace].",
    zh: "米娅是训练后唯一留下来的志愿者。教练说,她迅速的传球是球队最大的优势。决赛中她进了球,全校欢呼着看她举起奖章。那天晚上,两支对手球队握手言和,恢复了和平。",
  },
  space: {
    title: "The Small Astronaut",
    titleZh: "小个子宇航员",
    high: "On the space station, Leo was a [volunteer] for the first moonwalk. A [rapid] storm of rocks was coming, but being small was an [advantage]: he fitted through the narrow hatch and fixed the antenna. Back on Earth he got a [medal], and the two space agencies agreed to share the station in [peace].",
    low: "Leo is a [volunteer] in space. Rocks are coming. They are [rapid]. Leo is small. That is an [advantage]. He fixes the station and gets a [medal]. Everyone lives in [peace].",
    zh: "在空间站上,利奥自愿报名参加第一次月面行走。一场迅速袭来的陨石雨即将到来,但个子小反而成了优势:他钻进狭窄的舱口,修好了天线。回到地球后,他获得了一枚奖章,两家航天机构也同意和平共享空间站。",
  },
  cats: {
    title: "Biscuit Saves the Day",
    titleZh: "饼干救场",
    high: "Biscuit the cat believed she was a [volunteer] at the animal shelter. When a [rapid] mouse escaped, her quiet paws gave her the [advantage]. The staff made her a paper [medal], and for one whole afternoon the cats and dogs lived in [peace].",
    low: "Biscuit is a cat. She is a [volunteer] at the shelter. A mouse runs. It is [rapid]. Biscuit is quiet. That is her [advantage]. She gets a [medal]. Cats and dogs are at [peace].",
    zh: "猫咪饼干坚信自己是动物收容所的志愿者。一只迅速逃跑的老鼠溜了出来,她安静的爪子让她占了优势。工作人员给她做了一枚纸奖章,整整一个下午,猫和狗都和平相处。",
  },
};

export const tags = [
  { id: "football", label: "Football", zh: "足球" },
  { id: "space", label: "Space", zh: "太空" },
  { id: "cats", label: "Cats", zh: "猫" },
];

export const retellStarters = ["First, ...", "Then, ...", "Because ... , ...", "In the end, ..."];
