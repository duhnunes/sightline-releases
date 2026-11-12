<div align="center">
  <img src="./public/images/icons/web-app-manifest-192x192.png" width="128" alt="Sightline logo" />
  <h1>Sightline</h1>
  <p>An in-game multi-monitor editor for American Truck Simulator and Euro Truck Simulator 2</p>
  <p>
    <a href="https://docs.duhnunes.dev/sightline"><img src="https://img.shields.io/github/v/release/duhnunes/sightline-releases?display_name=tag&style=for-the-badge&color=28C8FF&label=release" alt="Latest release" /></a>
    <a href="https://docs.duhnunes.dev/sightline/docs"><img src="https://img.shields.io/badge/docs-read%20online-28C8FF?style=for-the-badge&logo=readthedocs&logoColor=white" alt="Documentation" /></a>
  </p>
</div>

> **Unofficial community project.** Sightline is not affiliated with or endorsed by SCS Software. Euro Truck Simulator 2, American Truck Simulator and SCS Software are trademarks of their respective owners.

Sightline lets you build and tune your multi-monitor setup from inside the game: move sliders and drag your views on the screen, and every change applies live. No console commands, no restarts.

## Download

Get `Sightline.zip` from the [latest release](../../releases/latest), or straight from [docs.duhnunes.dev/sightline/download](https://docs.duhnunes.dev/sightline/download), then follow the [installation guide](docs/01-getting-started/02-installation.mdx).

## Documentation

The user guide lives in [`docs/`](docs) and is published as a website. It covers installation, the on-screen editor, every view setting, the HUD, templates and panoramas, profiles and backups, Eyefinity and Surround, the hotkey, troubleshooting and known limitations.

## This repository

This repository holds the documentation site and the release downloads. The site is built with [RDX](https://rdx-tool.vercel.app/).

```bash
pnpm install
pnpm dev
```

Requires Node.js 22.18+ or 24.11+.

## License

- **Sightline (the plugin you download):** free to use, under the Sightline License included in every download. Please share the link to the [releases page](../../releases) rather than re-uploading the files.
- **This documentation site:** [MIT](LICENSE).
