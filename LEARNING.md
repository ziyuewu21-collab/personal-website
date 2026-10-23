# LEARNING — 大白话讲解(build-first-learn-later)

## v1 站点骨架 — 2026-07-06

- **代码在哪**:
  - `src/pages/index.astro` — 首页本体,五个区块按顺序排在这里
  - `src/data/site.ts` — 你的名字、邮箱、链接、CV 开关;`src/data/projects.ts` — 三张项目卡和 research 两条的**全部文字**
  - `src/layouts/Base.astro` — 每页共用的外壳(head 里的 SEO 标签、字体、页头页脚)
  - `src/components/Header.astro` / `Footer.astro` — 页头导航、页脚联系方式
  - `src/styles/global.css` — 颜色、字体这些"设计决定"都在最上面的 `@theme` 块里
- **数据怎么流**:访客打开网页 → Astro 在**构建时**(不是访问时)把 data 文件里的文字填进 index.astro 的模板 → 输出纯静态 HTML。没有服务器逻辑,没有数据库——所以它快、免费、几乎不会坏
- **想自己改的话**:改项目卡文字 → 打开 `src/data/projects.ts`,直接改引号里的英文,存盘,浏览器自动刷新。比如把第一张卡的 role 改掉,就是改 `role: "PM intern — ..."` 这一行

**检验问题**(答给下一个 session 的模型,答对才算这条完成):如果你想把页脚里的邮箱换掉,你会打开哪个文件?

## 项目卡加外链(MyTurn 上线) — 2026-07-22

- **代码在哪**:
  - `src/data/projects.ts` — 每张卡新增一个可选的 `links` 字段,就是一个列表,每项两样东西:`label`(按钮上显示的字)和 `url`(点了去哪)
  - `src/pages/index.astro` — Work 区块的卡片模板里加了一段:**如果这张卡有 links 就画一行链接,没有就什么都不画**
- **数据怎么流**:你在 `projects.ts` 里写一行 `{ label: "Live product", url: "https://..." }` → 构建时 index.astro 看到这张卡有 links → 生成一个 `<a>` 标签 → 访客看到 "Live product →" 并且能点。三张卡共用同一套模板,所以另外两张卡什么都不用改,它们没有 links 就自动不显示——和页脚 Substack 链接空着就隐藏是同一个套路
- **想自己改的话**:想给 MyTurn 再加一个链接(比如以后仓库转 public 了加 GitHub),打开 `src/data/projects.ts`,在 MyTurn 那张卡的 `links: [` 里再抄一行 `{ label: "GitHub", url: "https://github.com/..." },` 就行,不用碰 index.astro。想换卡片顺序,就把整个 `{ ... },` 块上下挪位置

**检验问题**:如果你想让"AI story-based vocabulary product"那张卡也带一个链接,你会去动哪个文件?要加什么?

## v2 doodle 改版 — 2026-10-23

- **代码在哪**:
  - `src/components/Avatar.astro` — 头像本体。上半部分是 SVG(头发、脸、眼睛、挥手的胳膊各是一段 `<path>`),下半部分 `<script>` 管三件事:眼睛跟鼠标、随机眨眼、点击换台词
  - `src/components/Classroom.astro` — 教室切换。两个按钮只改一个东西:最外层的 `data-mode="tl"` 或 `"sc"`。所有变化(老师走过去、学生张嘴、talk 条翻转)都是 CSS 根据这个值自动切换的
  - `src/components/PairLearning.astro` — 两人学 "dax",同样的套路(`data-mode="listen"` / `"active"`)
  - `src/components/ReportCard.astro` — CELTA 报告 36 格。格子是从 `src/data/teaching.ts` 的 `report` 列表一格一格画出来的
  - `src/data/teaching.ts` — CELTA 事实、36 项评级、4 条"课堂习惯 → 产品"、教室说明文字
  - `src/data/site.ts` — 新增 `heroLines`(头像台词)和 `lessonAim`(便利贴)
- **数据怎么流**:和 v1 一样,文字全在 data 文件,构建时填进组件。新东西是**少量浏览器里的 JS**:页面加载后,脚本监听鼠标位置,算出"鼠标在眼睛的哪个方向",把瞳孔往那边挪最多 4.5 个单位;点击时把气泡文字换成 `heroLines` 的下一句。"手绘抖动"是一个 SVG 噪声滤镜,三张不同的噪声图每 0.15 秒轮换一次
- **想自己改的话**:
  - 换头像台词 → `src/data/site.ts` 的 `heroLines`,一行一句,第一句是默认显示的
  - 换发型 → `Avatar.astro` 里注释 `hair, back layer` 和 `fringe` 下面那两段 `<path>`(最好让模型改,告诉它你想要什么发型)
  - 改 CELTA 某项评级(比如发现抄错了)→ `src/data/teaching.ts` 里那一行的 `rating: "e"` / `"s"`,上面的 13/23/0 会自动重算

**检验问题**:如果你想让头像第一句话改成 "Hello!",你会打开哪个文件、改哪里?如果教室切换按钮点了没反应,你会先去哪个文件找原因?
