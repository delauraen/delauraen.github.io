# lalaland.dev

Game design portfolio of Laura Weerasinghe: game jam projects, level design and design breakdowns.

- **Live site:** [lalaland.dev](https://lalaland.dev)
- **Play my games:** [delauraen.itch.io](https://delauraen.itch.io)
- **LinkedIn:** [laura-weerasinghe](https://www.linkedin.com/in/laura-weerasinghe/)

Built with [Astro](https://astro.build) on the Portfolio starter template and deployed to GitHub Pages.

## Adding a game

1. Add screenshots to `src/assets/games/`.
2. Create a Markdown file in `src/content/work/`. Copy an existing one for the frontmatter fields (jam, theme, role, team size, engine, platforms, itch link).
3. Add or link the entry in the jam log in `src/site.ts`.

Name, email and social links also live in `src/site.ts`.

## Commands

Run from the project root:

| Command           | Action                                         |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start the local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`         |
| `npm run preview` | Preview the build locally                      |

Pushing to `master` builds and deploys the site through `.github/workflows/deploy.yml`.
