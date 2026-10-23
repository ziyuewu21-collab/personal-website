# Personal Site Spec
status: approved(Ziyue 批准 2026-07-06)
date: 2026-07-06

## Goal(一句话)
给 edtech 招聘方一个 30 秒内看懂"她是谁、求什么岗、凭什么"的页面;URL 放进 CV 和 LinkedIn。

## Success criteria
- 招聘方打开 30 秒内能回答三个问题:谁 / 求什么岗(edtech PM,entry-level)/ 凭什么(shipped product + 语言科学背景)
- 手机上体验完整(招聘方大概率手机点开 CV 链接)
- 一周内上线 v1;之后每个 case study 单独迭代

## 定位句(hero,英文,待 Ziyue 确认)
> Product manager for language learning.
> UCL speech science + a shipped edtech product — I build tools for how people actually learn to communicate.

(已确认 2026-07-06)

## Scope — v1(一页式,五个区块)

1. **Hero** — 定位句 + 两个按钮:View work / Download CV(PDF)
2. **Projects**(卡片,3 张)
   - 高木项目匿名化定稿:站上统一叫 **"AI story-based vocabulary product"**,不写公司名。0→1、full product cycle、81% warm-lead conversion(保留 honest framing:小样本)
   - B2G medical system(Beijing):130 requirements、90k-char bid、70 UI screens——展示复杂度处理能力
   - ielts-app — "currently building" 状态,一句话愿景(storytelling-based speaking practice)。上线后换成 live link
3. **Research → Product**(短区块,不是学术简历)— dissertation(social interaction in learning)+ gesture 研究,每条一句"这告诉我产品应该怎么做"。学术为产品思维服务,呼应她的定位
4. **Writing** — LinkedIn + Substack 外链(有 ≥3 篇后再加预览卡片,v1 只放链接)
5. **Footer** — email、LinkedIn、GitHub

## Out of scope(v1 明确不做)
- 博客引擎/站内文章(Writing 只外链)
- 中文版、暗色模式、评论、analytics(最多 Vercel 自带)
- Project case-study 详情页(v2 做,每个项目一页)
- 求职自动化工具作为作品展示(PLAYBOOK C2 判例:招聘方负面信号,不上站)

## Content needed from Ziyue(不阻塞开工,上线前补齐)
- [x] 定位句 — 已确认
- [x] 高木匿名化 — "AI story-based vocabulary product",不写公司名
- [ ] CV PDF(master-cv.md 完成后导出;放到 `public/cv.pdf`,没有之前按钮先隐藏)
- [ ] 是否放照片(可选,不放也成立;v1 默认不放)
- [ ] 域名:v1 先用 Vercel 免费域名上线,买域名是后续可选项

## 技术与视觉
全部按 skill 文件执行:`vibe-coding/stack.md`(Astro + Tailwind + Vercel)、`vibe-coding/design-system.md`(tokens 已定)。此处不重复、不另做决定。

---

## v2 — 手绘 doodle 改版 + Teaching 区块(Ziyue 2026-10-23 提出)

**为什么改**:Ziyue 想要动画简笔画个人形象 + 有趣的交互(参考 gordontu.com / krishnagupta.web.app / jinhyuk.org;这三个站在云端环境被网络策略拦截,未能直接参考),并展示 CELTA 训练 + 毕业论文(social learning)背后的 student-centred 教学理念。

**设计原则**:网站本身用她的教学方式讲话——先让访客动手(elicit),再给结论。招聘方 30 秒测试仍然成立:定位句和 Work 仍在最前面。

区块顺序:Hero → Work → How I teach(新)→ Why learning is social(原 Research 扩充)→ Writing → Contact

- **Hero**:doodle 头像(眼睛跟随鼠标、自动眨眼、点击挥手 + 换台词)+ CELTA 格式的 "Lesson aim" 便利贴
- **How I teach**:教室 doodle 可切换 Teacher-led / Student-centred(老师走下讲台、学生开口、talk-time 条翻转)、4 条"课堂习惯 → 产品决策"、CELTA 报告 36 项逐格还原(13 excellent / 23 standard / 0 needs attention)+ 诚实写出 "Working on: Instructions"
- **Why learning is social**:两人学新词 "dax" 的 doodle,可切换 Just listening / Taking part(提问、手势、对视)+ 原有两条 research 卡

**v2 解除的 v1 限制**:动画、新区块(Teaching)。暗色模式仍不做(纸张质感是设计本身)。

**待 Ziyue 确认的文案**(都在 data 文件里,改字不碰组件):
- [ ] Hero 副标题加了 "CELTA teacher training"(动了已确认的定位句第二句)
- [ ] `src/data/teaching.ts` 的 4 条 principles 和 workingOn(来源:CELTA 课堂笔记 + 报告,措辞是模型写的)
- [ ] `src/data/site.ts` 的 heroLines(头像台词)
- [ ] 头像长相:默认黑色及肩发 + 斜刘海,需按本人调整(发型/眼镜/标志物)
