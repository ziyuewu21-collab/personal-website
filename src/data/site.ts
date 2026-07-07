// Single source for site-wide facts. Cheap-model rule: edit VALUES here only —
// components read from this file, never hardcode a link or the title in a component.

export const site = {
  name: "Ziyue Wu",
  title: "Ziyue Wu — Product Manager for Language Learning",
  description:
    "Product manager for language learning. UCL speech science + a shipped edtech product — building tools for how people actually learn to communicate.",
  email: "ziyue.wu.21@gmail.com",
  // External profiles. Empty string = link is hidden automatically. Fill when ready.
  linkedin: "https://www.linkedin.com/in/ziyue-moon-wu-586b903aa/",
  substack: "", // TODO(Ziyue): add Substack URL when first post is live
  github: "", // TODO(Ziyue): add GitHub profile URL when repo is public
  // Set to true only after public/cv.pdf exists (BUILD-PLAN T2)
  cvReady: false,
};
