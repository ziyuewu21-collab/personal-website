# BUILD-PLAN — personal-site 剩余任务(便宜模型可执行)

> 读我之前先读:`~/.claude/skills/vibe-coding/SKILL.md`(铁律)+ `checklists.md`(verify loop)。
> 架构和文案已由强模型完成并 commit(2026-07-06)。**你的工作 = 按下面的任务清单执行,不改架构、不改文案调性、不加功能。** 遇到清单外的决定 → 输出 ESCALATE,停。

## 已完成(不要重做)

- Astro 7 + Tailwind 4 项目,`npm run build` 通过
- 全部 5 个区块的页面 + 文案(来源 master-cv.md,匿名化已定稿)
- Design tokens 在 `src/styles/global.css`;站点数据在 `src/data/site.ts` 和 `src/data/projects.ts`
- 手机 375px + 桌面 1280px 验证通过;404 页;favicon;git repo(main)

## 架构规则(执行时必须遵守)

1. 改链接/文字事实 → 只改 `src/data/site.ts` / `src/data/projects.ts`,不碰组件
2. 空 URL 的链接自动隐藏(Footer 和 Writing 区块已实现)——补 URL 就是填字符串,不写新 if
3. CV 按钮由 `site.ts` 的 `cvReady` 开关控制,`public/cv.pdf` 存在后才设 true
4. 样式只用 global.css 里的 tokens 和 Tailwind scale 值(design-system.md 的禁止清单适用)

## 任务(按顺序,每个做完跑 verify loop 再 commit)

### T1 — 上线(Ziyue 15 分钟 + 模型引导)
1. Ziyue:GitHub 建空 repo `personal-site`(public 或 private 都行)
2. 模型跑:`git remote add origin <repo-url> && git push -u origin main`
3. Ziyue:vercel.com → Add New Project → import 该 repo → 框架自动识别 Astro → Deploy(不需要任何 env var)
4. 验收:线上 URL 打开,5 个区块都在,console 无红错
5. 把线上 URL 写进本文件末尾的 Log,并提醒 Ziyue 加进 CV 和 LinkedIn

### T2 — CV PDF(等 master-cv.md 定稿后)
1. Ziyue 提供 CV 的 PDF → 存为 `public/cv.pdf`
2. 模型:`src/data/site.ts` 里 `cvReady: false` → `true`
3. 验收:hero 出现 Download CV 按钮,点击能打开 PDF;commit

### T3 — og.png(社交分享卡片,上线后尽快)
1. Ziyue(5 分钟):Edge 打开线上站 → F12 → 设备模拟 1200×630 → 截图 hero 区块 → 存为 `public/og.png`
2. 模型:确认文件存在后 commit;用 LinkedIn Post Inspector(linkedin.com/post-inspector)验证卡片
3. og.png 不存在期间分享卡片没图但不报错,可接受,不阻塞 T1

### T4 — 补外链(Ziyue 给 URL 时随时做)
- Substack URL → `site.ts` 的 `substack`;GitHub URL → `github`。填完验收:Footer 和 Writing 区块出现对应链接。每次 commit

### T5 — Pre-ship 全检(T1–T3 完成后)
- 跑 `vibe-coding/checklists.md` 的 Pre-ship checklist,**对线上 URL** 逐项过,结果贴在 Log
- 唯一预期例外:og.png 若 T3 未做则标记 pending

### 禁止事项(便宜模型高发)
- 不加暗色模式、动画、新区块、新页面
- 不把 data 文件"重构"成 content collections(v2 做 case-study 页时才引入)
- 不升级/新增依赖(包括 "npm audit fix --force")
- 不改定位句和任何数字事实

## Log(每个任务完成后追加一行:日期 + 任务 + 结果)

- 2026-07-06 — 架构 + v1 全部区块 + 验证 + 首次 commit(强模型完成)
