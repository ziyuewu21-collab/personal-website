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
