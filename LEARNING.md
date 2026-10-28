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

## v3 lesson-plan 概念 — 2026-10-23

- **代码在哪**:
  - `src/data/lesson.ts` — 教案本体:5 个 stage 的名字、谁在说话、talk 比例、分钟数;还有聊天框的台词
  - `src/components/LessonHud.astro` — 底部那条胶囊。脚本做的事:每次滚动,看哪个区块的顶部已经过了屏幕 45% 那条线 → 那就是当前 stage → 换文字、挪 talk 条、算时钟
  - `src/components/ChatContact.astro` — 聊天框。三步:问名字 → 问留言 → 生成一个 `mailto:` 链接(就是"点了打开你的邮件 App 并填好内容"的那种链接)。**没有服务器,也不存任何东西**——所以你收到的就是一封普通邮件
  - `src/pages/index.astro` — 每个 `<section id="...">` 的 id 对应 lesson.ts 里的一个 stage
- **数据怎么流**:lesson.ts 的 stage 列表 → 构建时写进 HUD 的 `data-stages` 属性 → 浏览器里脚本读出来,配合滚动位置实时更新。区块标题上方那行 "STAGE 03 · TASK · Ss ↔ Ss" 也是从同一个列表生成的,所以改一处两边都变
- **想自己改的话**:
  - 改某个 stage 的名字或分钟数 → `src/data/lesson.ts` 那一行(总分钟数 `lessonMinutes` 要等于各 stage 相加)
  - 改聊天框说的话 → `src/data/lesson.ts` 的 `chat`,`{name}` 会被替换成访客的名字

**检验问题**:如果你在页面中间新加一个区块,但没在 lesson.ts 里加对应的 stage,底部的教案条会怎样?为什么聊天框不需要后端?

## v4 桌面首页 — 2026-10-28

- **代码在哪**:
  - `src/pages/index.astro` — 桌面本体:菜单栏、图标、便利贴、所有窗口的内容,底部 `<script>` 是"窗口管理员"(打开、关闭、拖动、置顶、打勾)
  - `src/components/desk/Guide.astro` — 引导者。它不直接碰窗口,只"听"两个广播:`desk:open`(某个窗口开了)和 `desk:close`(关了),据此决定下一句说什么
  - `src/components/desk/InkField.astro` — 背景字母场,一块 canvas 画布,鼠标附近的字放大变深;没人动时不重画,省电
  - `src/data/desk.ts` — 桌面上所有文字:图标、导览台词、彩蛋、三个游戏的题目
- **数据怎么流**:点图标 → 窗口管理员打开窗口 → 广播 "desk:open, myturn" → 引导者听到"刚才让你开的就是这个" → 换成下一句;便利贴同时打勾,并记在浏览器里(下次来会说 Welcome back)
- **想自己改的话**:
  - 改引导者说的话 → `desk.ts` 的 `tour.steps`,每步三句:`say`(指令)、`after`(打开后)、`task`(可选,做完任务后)
  - 改猜词游戏的词 → `desk.ts` 的 `guess.words`,每个词 4 个选项(英 + 中 + 拼音)和 3 条线索
  - 加一个桌面文件 → `items` 加一行 + `titles` 加标题 + index.astro 加一个 `<Window id="...">`

**检验问题**:如果你想让引导者第一步改成先看简历,你要改 `desk.ts` 里的哪一部分?为什么引导者知道你已经打开了 MyTurn?
