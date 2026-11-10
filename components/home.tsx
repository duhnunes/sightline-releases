import type { ReactNode } from 'react'
import { withBasePath, type RdxHomepageProps } from '@lexibase/rdx'

import { Logo } from './logo'
import { Video } from './video'

// The landing page at "/" (homepage.component in rdx.config.ts). Every claim
// and every value on it matches the plugin as released: names, units, colours
// and limits are the ones the window and the docs use.

// Paths inside the site; link() adds the deployment prefix (basePath in
// rdx.config.ts), which plain <a> tags do not get on their own.
const DOWNLOAD = '/download' // vercel.json: the latest release's Sightline.zip
const RELEASES = 'https://github.com/duhnunes/sightline-releases/releases'
const GITHUB = 'https://github.com/duhnunes/sightline-releases'
const VERSION = '0.2.0'
// The YouTube id of the video, once it is published. Empty: a placeholder.
const VIDEO_ID = ''

/** Lucide-style outline icon. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6 shrink-0 text-(--rdx-highlighting)"
    >
      {children}
    </svg>
  )
}

const ICONS = {
  move: (
    <Icon>
      <path d="M5 9l-3 3 3 3" />
      <path d="M9 5l3-3 3 3" />
      <path d="M15 19l-3 3-3-3" />
      <path d="M19 9l3 3-3 3" />
      <path d="M2 12h20" />
      <path d="M12 2v20" />
    </Icon>
  ),
  sliders: (
    <Icon>
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M2 14h4" />
      <path d="M10 8h4" />
      <path d="M18 16h4" />
    </Icon>
  ),
  compass: (
    <Icon>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </Icon>
  ),
  screens: (
    <Icon>
      <rect x="2" y="5" width="6" height="11" rx="1" />
      <rect x="9" y="5" width="6" height="11" rx="1" />
      <rect x="16" y="5" width="6" height="11" rx="1" />
      <path d="M8 20h8" />
    </Icon>
  ),
  power: (
    <Icon>
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </Icon>
  ),
  more: (
    <Icon>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </Icon>
  ),
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  ),
}

function Card({ icon, title, text, children }: { icon: ReactNode; title: string; text: string; children: ReactNode }) {
  return (
    <article className="flex min-w-0 flex-col gap-4 rounded-xl border bg-card p-5 sm:p-6">
      <div className="flex gap-3">
        {icon}
        <div className="min-w-0">
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
      <div className="mt-auto">{children}</div>
    </article>
  )
}

// --- Illustrations: what the plugin really draws ------------------------------

/** Views outlined over the game: the selected one in cyan, a snap line in pink, the HUD bar in yellow. */
function OnScreen() {
  return (
    <svg viewBox="0 0 300 130" className="sl-scene" role="img" aria-label="Three views outlined over the game, the selected one in cyan, snapped to the next one">
      <rect x="0" y="0" width="300" height="130" rx="6" className="sl-scene-bg" />
      <rect x="6" y="8" width="92" height="114" className="sl-view" />
      <text x="12" y="22" className="sl-view-name">left</text>
      <rect x="104" y="8" width="92" height="114" className="sl-view-selected" />
      <rect x="104" y="8" width="88" height="16" className="sl-view-tag" />
      <text x="109" y="19.5" className="sl-view-tag-text">center  width 33.3%</text>
      <rect x="202" y="8" width="92" height="114" className="sl-view" />
      <text x="208" y="22" className="sl-view-name">right</text>
      <line x1="199" y1="2" x2="199" y2="128" className="sl-snap" />
      <rect x="6" y="117" width="288" height="4" className="sl-hud" />
    </svg>
  )
}

/** Rows like the Sightline window's: plain names, units, a reset button on the changed one. */
function Fields() {
  const rows: [string, string, boolean][] = [
    ['Turn', '15.0°', true],
    ['Tilt', '0.0°', false],
    ['Horizontal FOV', '71.0°', false],
    ['Up / down', '3.00 m', true],
  ]
  return (
    <div className="sl-window" aria-label="Fields of a view, in degrees and metres">
      {rows.map(([name, value, changed]) => (
        <div key={name} className="sl-row">
          <span className="sl-row-name">{name}</span>
          <span className="sl-row-value">
            {value}
            {changed && (
              <span className="sl-reset" title="Back to the saved value">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 4v5h5" />
                </svg>
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

/** Seen from above: 4 views of 90° all around the truck. */
function Panorama() {
  const cx = 150
  const cy = 65
  const r = 56
  const point = (deg: number) => {
    const a = (deg * Math.PI) / 180
    return `${(cx + r * Math.sin(a)).toFixed(1)} ${(cy - r * Math.cos(a)).toFixed(1)}`
  }
  const wedges = [0, 90, 180, 270].map((c) => `M${cx} ${cy} L${point(c - 42)} A${r} ${r} 0 0 1 ${point(c + 42)} Z`)
  return (
    <svg viewBox="0 0 300 130" className="sl-scene" role="img" aria-label="Four views of 90 degrees covering 360 degrees around the truck">
      <rect x="0" y="0" width="300" height="130" rx="6" className="sl-scene-bg" />
      {wedges.map((d, i) => (
        <path key={d} d={d} className={i === 0 ? 'sl-wedge-front' : 'sl-wedge'} />
      ))}
      <rect x="144" y="52" width="12" height="26" rx="2" className="sl-truck" />
      <text x="22" y="30" className="sl-scene-label">4 views</text>
      <text x="22" y="46" className="sl-scene-label">× 90°</text>
      <text x="236" y="38" className="sl-scene-big">360°</text>
    </svg>
  )
}

/** One Eyefinity / Surround display, split where the physical screens meet. */
function Surround() {
  return (
    <svg viewBox="0 0 300 130" className="sl-scene" role="img" aria-label="One wide display split into three screens by dashed lines">
      <rect x="0" y="0" width="300" height="130" rx="6" className="sl-scene-bg" />
      <rect x="10" y="12" width="280" height="76" rx="3" className="sl-display" />
      <line x1="103.3" y1="12" x2="103.3" y2="88" className="sl-seam" />
      <line x1="196.7" y1="12" x2="196.7" y2="88" className="sl-seam" />
      <text x="150" y="104" textAnchor="middle" className="sl-scene-label">One 5760 × 1080 display</text>
      <text x="150" y="120" textAnchor="middle" className="sl-scene-label">Screens side by side: 3</text>
    </svg>
  )
}

/** The window when multi-monitor mode is off: dimmed, one button. */
function ModeButton() {
  return (
    <div className="sl-dimmed" aria-label="The Sightline window, dimmed, with one button">
      <span className="sl-primary-button">Turn on multimon mode (restarts the game)</span>
    </div>
  )
}

const STEPS: [title: string, text: ReactNode][] = [
  [
    'Copy one file',
    <>
      Put <code>sightline.dll</code> in the game&apos;s <code>bin\win_x64\plugins</code> folder.
    </>,
  ],
  [
    'Open it in the game',
    <>
      Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>. The game keeps running behind it.
    </>,
  ],
  [
    'Turn on multi-monitor mode',
    <>One click. The game saves, closes, and Steam opens it again, ready to edit.</>,
  ],
]

export default function Home({ basePath, docsHref }: RdxHomepageProps) {
  const link = (path: string) => withBasePath(path, basePath)
  const DOCS = link(docsHref)
  return (
    // relative: keeps the sr-only heading positioned inside the scrolling
    // main; without it, it is placed against <body> and stretches the page,
    // giving a second scrollbar outside the site.
    <div className="sl-home relative">
      {/* Hero */}
      <section className="px-4 pt-14 pb-12 text-center sm:pt-20">
        <Logo className="mx-auto size-20 sm:size-24" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Sightline</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Your multi-monitor setup, edited inside the game.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          A free plugin for American Truck Simulator and Euro Truck Simulator 2. Drag your views, see every change
          live, save when it looks right.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={link(DOWNLOAD)} className="sl-button sl-button-primary">
            {ICONS.download} Download
          </a>
          <a href={DOCS} className="sl-button">
            Read the docs
          </a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Version {VERSION} · Windows · DirectX 11 ·{' '}
          <a href={RELEASES} className="underline-offset-2 hover:underline">
            all releases
          </a>
        </p>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border bg-black shadow-2xl">
          <Video id={VIDEO_ID} title="Sightline: multi-monitor editing inside ATS and ETS2" />
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features" className="px-4 py-12">
        <h2 id="features" className="text-center text-2xl font-semibold sm:text-3xl">
          No more text editor and restarts.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          The game&apos;s custom multi-monitor mode lives in a file you edit by hand and check after a restart.
          Sightline puts it on the screen, where you can see it.
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={ICONS.move}
            title="Drag your views"
            text="Every view is outlined over the game. Move it, resize it, and its edges snap to your screens, the other views and the HUD."
          >
            <OnScreen />
          </Card>

          <Card
            icon={ICONS.sliders}
            title="Plain names, plain units"
            text="Turn, tilt and field of view in degrees, position in percent, camera in metres. Every change applies live, and any field resets in one click."
          >
            <Fields />
          </Card>

          <Card
            icon={ICONS.compass}
            title="Panorama up to 360°"
            text="Build 2 to 4 views that cover any part of the horizon, all the way around the truck, with the camera anywhere you like."
          >
            <Panorama />
          </Card>

          <Card
            icon={ICONS.screens}
            title="Eyefinity and Surround"
            text="When your screens are joined into one display, tell Sightline how many there are, and views snap to where they meet."
          >
            <Surround />
          </Card>

          <Card
            icon={ICONS.power}
            title="Turns the mode on for you"
            text="No config file to edit. One button turns on multi-monitor mode and restarts the game through Steam."
          >
            <ModeButton />
          </Card>

          <Card icon={ICONS.more} title="And more" text="Everything around the layout, so trying things is safe.">
            <ul className="list-disc space-y-1.5 ps-5 text-sm text-muted-foreground marker:text-(--rdx-highlighting)">
              <li>Undo and redo with Ctrl + Z and Ctrl + Y</li>
              <li>Profiles you switch in a second and share as plain .sii files</li>
              <li>A copy of your file before every Save</li>
              <li>The game&apos;s templates, from one view to three screens</li>
              <li>The HUD across the whole window or on the centre screen</li>
            </ul>
            <a href={DOCS} className="mt-4 inline-block text-sm font-medium text-(--rdx-highlighting) hover:underline">
              See every feature →
            </a>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="steps" className="px-4 py-12">
        <h2 id="steps" className="text-center text-2xl font-semibold sm:text-3xl">
          Running in three steps.
        </h2>
        <ol className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {STEPS.map(([title, text], i) => (
            <li key={title} className="rounded-xl border bg-card p-5 sm:p-6">
              <span className="sl-on-accent grid size-9 place-items-center rounded-full bg-(--rdx-highlighting) text-sm font-bold">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="sl-step-text mt-1 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm">
          <a href={link("/docs/getting-started/installation")} className="font-medium text-(--rdx-highlighting) hover:underline">
            Full installation guide →
          </a>
        </p>
      </section>

      {/* Requirements */}
      <section aria-labelledby="requirements" className="px-4 py-8">
        <h2 id="requirements" className="sr-only">
          Requirements
        </h2>
        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li>Windows, 64-bit</li>
          <li>DirectX 11 renderer</li>
          <li>ATS: tested on 1.62</li>
          <li>ETS2: supported, not tested yet</li>
          <li>Free</li>
        </ul>
      </section>

      {/* Call to action */}
      <section aria-labelledby="get" className="px-4 pt-12 pb-20 text-center">
        <h2 id="get" className="text-2xl font-semibold sm:text-3xl">
          Ready to see more of the road?
        </h2>
        <p className="mt-3 text-muted-foreground">Get Sightline for ATS and ETS2. It is free.</p>
        <a href={link(DOWNLOAD)} className="sl-button sl-button-primary mt-6">
          {ICONS.download} Download Sightline
        </a>
      </section>

      <footer className="border-t px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo className="size-8" />
            <div>
              <p className="text-sm font-medium">Sightline</p>
              <p className="max-w-md text-xs text-muted-foreground">
                Unofficial community project, not affiliated with or endorsed by SCS Software. Euro Truck Simulator 2,
                American Truck Simulator and SCS Software are trademarks of their respective owners.
              </p>
            </div>
          </div>
          <nav aria-label="Footer" className="flex items-center gap-5 text-sm">
            <a href={DOCS} className="hover:text-(--rdx-highlighting)">
              Docs
            </a>
            <a href={RELEASES} className="hover:text-(--rdx-highlighting)">
              Releases
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-(--rdx-highlighting)">
              {ICONS.github}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
