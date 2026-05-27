# whittly

Small, sharp developer tools that run in your browser — no signups, no trackers, no mystery servers.

The frontend is open source. The backend API (Pro cloud features) is proprietary.

## Tools

**Encode / decode** — Base64, URL, HTML, bcrypt  
**Format / validate** — JSON formatter, JWT decoder  
**Convert** — CSV ↔ JSON, XML ↔ JSON, number base converter, timestamp converter  
**Generate** — UUID, password, Lorem Ipsum  
**Text** — regex tester, case converter, diff, slug generator, string inspector, curl converter  
**Hash** — SHA-256 / SHA-512 (text & file)

## Stack

- [Astro](https://astro.build) — static site generator, zero JS by default
- Vanilla CSS with custom properties for theming
- TypeScript for catalog types and build-time logic
- All core tools run client-side — no network calls

## Development

```sh
# install dependencies
npm install

# start dev server at localhost:4321
npm run dev

# production build → ./dist/
npm run build

# preview production build locally
npm run preview
```

Requires Node.js ≥ 22.12.0.

## Self-hosting

The output is a fully static site. Build once, serve anywhere:

```sh
npm run build
# serve ./dist/ with nginx, apache, caddy, or any static host
```

## Contributing

Each tool is a single self-contained Astro component in `src/components/tools/`. New tools are added to the catalog in `src/data/catalog.ts` and wired into `src/components/ToolPage.astro`.

Open an issue first if you're adding something non-trivial — happy to discuss before you write code.

## License

Apache 2.0 — see [LICENSE](LICENSE).
