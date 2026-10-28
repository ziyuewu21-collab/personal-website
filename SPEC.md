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
- [x] 头像长相:按 Ziyue 选定的插画定稿——黄色开衫 + 白 T、眨眼微笑(招牌表情)、透明方框眼镜、深棕侧分层次发、露一侧耳朵、脸颊小痣、金色细项链(照片和插画原图都不进 repo,SVG 是重画的)

---

## v3 — 一个核心概念 + 克制的视觉(2026-10-23,看过参考站截图后)

**参考站的共同点**:每个站只有**一个**和本人身份绑死的概念(Ryan Choi 的 원고지 稿纸格、Anna Cheng 的跳伞 = 滚动、Gordon Tu 把头像嵌进第一句话),其余全部克制(白底、细线、等宽小标签)。v2 的问题是反过来:装饰多,概念散。

**v3 概念:整页就是一份 CELTA lesson plan。**
- 每个区块 = 一个 stage:01 Lead-in(hero)→ 02 Context(Work)→ 03 Task(Teaching)→ 04 Language focus(Research)→ 05 Feedback(Contact)
- 底部固定的 lesson-plan 条(借 Anna 的高度表):当前 stage、谁在说话(T → Ss / Ss ↔ Ss / Ss → T)、talk-time 条、按滚动走的 45 分钟课堂时钟;"plan" 按钮打开完整教案表(兼导航)
- 页面从老师说(T → Ss)走到访客说(Ss → T)= student-centred 本身
- Hero 借 Gordon:头像嵌在句子里 + 三个小图标行(classroom / lab / shipped)各链到对应区块
- Contact 借 Gordon:聊天式(名字 → 留言 → 打开邮件 App,mailto,无服务器、不存数据)

**视觉**:白底、去掉点阵/胶带/错位阴影;Caveat 只用在 doodle 里和名字 logo;新增 JetBrains Mono 做标签;Work 改成细线分隔的列表(招聘方更好扫)。Writing 区块并入 Contact。

**待 Ziyue 决定**:
- [ ] 是否做 Ryan 式"稿纸/田字格"拼贴 hero(需要你的中文名 + 人生片段插画,插画需另外生成)
- [ ] v2 留下的文案/长相确认项仍有效(见上)

---

## v4 — Ziyue's Desk(2026-10-28)

**为什么**:Ziyue 看了 Amanda Treutler 的桌面式网站、rai.codes 的鼠标流体、kirbs 的小游戏,核心诉求是"我作为引导者,无痛地一步一步引导 HR 的好奇心"。

**首页 `/` = 桌面**;原长页面保留在 `/classic`(给喜欢滚动的人,菜单栏和简历窗口都有入口)。
- **引导者**:右下角眨眼头像 + 对话卡,一次只给一条指令,等对方做完再给下一条(CELTA 的 instruct → do)。第 2 步里有个"任务":亲手把教室切到 student-centred。全程可跳过,"Just the resume" 一键直达简历
- **便利贴 = 教案**:5 行,打开对应窗口就打勾;点任意一行直接跳转(解决 Ritik's Desk "隐藏内容被跳过"的问题)
- **背景**:多语种字母场,随鼠标放大、变深、被推开(语言学习版的 rai.codes / kirbs 背景),喜茶式黑白线稿 + 开衫黄单一强调色
- **彩蛋**:`answer_key.pdf`(学生永远拿不到答案:guided discovery)、`Trash`(红笔、单词表、一次给六条指令)
- **Classroom games 文件夹**(一个图标,三个 30 秒小游戏,每个对应一个 CELTA 技巧):
  - Guess my word:描述猜词 = eliciting;中英双语选项,揭晓时给拼音
  - Grammar Auction:来自 Ziyue 的 CP 笔记(grammar gamble 改叫 auction,因为赌博在部分课堂是禁忌);第一句老师示范,一次只做一个决定,反馈留到最后用红笔,结尾是 freer practice "If I hire Ziyue, ..."
  - Moonish:学三个自造词(一个被告知、两个靠手势自己猜),体验论文的 active vs passive
- **手机**:桌面变成可滚动的主屏,窗口全屏打开

**待 Ziyue 确认**:
- [ ] "中英双语"指的是整站切换(EN / 中文),还是只要游戏双语(已做)
- [ ] `src/data/desk.ts` 里引导台词、彩蛋、游戏文案用她自己的话改
- [ ] 简历窗口的 UCL 学位全称和日期(`education`,有 TODO)

### v4.1 — 研究和"我是谁"怎么体现(2026-10-28)

- **Lab notes 新主图**:"Who learns a new word best?" 三个学习者遇到 dax:Robot(bottom-up,反复看原始输入)、LLM(top-down,读过海量文本但从没摸过)、Human(both,再加一个人指、比划、问"like this?")。答案句 "Bottom-up or top-down? Both." 出自导师给 robotics/AI 研究者的 seminar;下面是两个 ingredients(多模态输入 / 多模态互动)和"对 AI tutor 和我的产品意味着什么"。`/classic` 的 Research 区块同步
- **about_me.txt**:"我是谁? who am i?",好奇人、先看全局、爱问为什么、讨厌死记、路痴梗;科学转折:Pashler et al. (2008) 学习风格匹配无证据 → 按任务设计,不按"学习者类型";SQL 例子(global 理解 + sequential 执行)
- **桌面壁纸**:喜茶式线稿"纸杯电话"——两个人用卷曲的线连着,"hey!" / "你好!"(只在 ≥1200px 宽和手机上显示,避免挡住引导卡)

**待 Ziyue 确认**:`src/data/learning.ts` 的导师署名(Prof. Gabriella Vigliocco)和两个 YouTube 录像的标题(现在叫 Recording 1 / 2);about_me 里"在学 SQL""tube station 迷路"是否属实/愿意公开
