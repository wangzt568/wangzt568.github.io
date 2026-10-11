# ZetianNotes

A static blog built with [Valaxy](https://github.com/YunYouJun/valaxy) 1.1.0 and its Yun theme, deployed to GitHub Pages.

## Develop

Use Node.js **22.12+** (Node 24 recommended).

```sh
npm ci
npm run dev
```

Edit the Markdown posts under `pages/posts/2020/` and `pages/posts/2021/`. Valaxy uses native `/posts/` URLs; each migrated post redirects its original Hexo URL through `from` frontmatter. New posts can also use dated directories with an `index.md` file and `layout: post` frontmatter. Site identity is in `site.config.ts`; theme settings are in `valaxy.config.ts`; images live in `public/img/`.

```sh
npm run build
npm run check:migration
npm run typecheck
npm run preview
```

The build generates static HTML in `dist/`, local search, and Atom/RSS feeds. The custom feed generator publishes full rendered content and normalizes nested index routes. Utterances comments use the original repository and original Hexo path as their issue term.

## GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The workflow in `.github/workflows/pages.yml` builds and deploys `dist/` on pushes to `master` or `main`, or a manual workflow run. The site uses the root URL `https://wangzt568.github.io/`.

## Migration record

Seven posts were recovered from the published Hexo HTML. Titles, publication/update timestamps, tags and categories come from the old Atom feed; the post bodies come from their HTML pages to retain code whitespace. Original heading IDs are preserved and dated URLs redirect to the new post routes, along with all images. Old tag/category URLs redirect to Valaxy’s query filters; dated archive URLs redirect to the archive listing. The original about page was empty and remains empty. The original category spelling (`Multi-threading` versus `Multithreading`) is preserved.

`legacy/hexo/` retains the complete old generated site for recovery and comparison and is not included in the deployed output. To repeat the recovery, run `npm run migrate:hexo` (requires Python 3); this overwrites migrated posts, so avoid running it after editing them. `npm run check:migration` compares the built posts with the archived originals and verifies URLs, headings, code, images, search entries, redirects and feeds.

The old Hexo theme scripts, generated indexes and search feed are replaced by Valaxy. The migration and workflow are local changes; deployment happens after pushing and configuring Pages.
