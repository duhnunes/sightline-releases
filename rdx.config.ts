import { defineConfig } from '@lexibase/rdx'
import { Logo } from './components/logo'
import Home from './components/home'

export default defineConfig({
  // Served at docs.duhnunes.dev/sightline: the duhnunes.dev router rewrites
  // /sightline/* to this project. Every page and file lives under this prefix.
  basePath: '/sightline',
  description: 'Sightline: an in-game multi-monitor editor for American Truck Simulator and Euro Truck Simulator 2.',
  // HTML and interface language: 'en' or 'pt-BR'. Your documents stay as written.
  lang: 'en',
  // Site identity, SEO and link previews. '/' paths refer to files in public/.
  metadata: {
    // The single site name: browser titles, social previews and default branding.
    applicationName: 'Sightline',
    // Footer starting year. Change it to an earlier founding year if needed.
    since: 2026,
    // Set metadataBase to your public site URL for the sitemap and share images.
    metadataBase: 'https://docs.duhnunes.dev',
    // Icons are rendered from public/images/icons/favicon.svg and app-icon.svg.
    icons: {
      // Browser tab icons with optional sizes and MIME types.
      icon: [
        { url: '/images/icons/favicon.svg', type: 'image/svg+xml' },
        { url: '/images/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      ],
      // Traditional favicon link for browser compatibility.
      shortcut: '/images/icons/favicon.ico',
      // Home screen icon on iPhone and iPad.
      apple: '/images/icons/apple-touch-icon.png',
    },
    // The web app manifest (name and icons when installed); RDX does not create it.
    manifest: '/site.webmanifest',
    // Link previews (Discord, forums): the app icon, square, so a small card.
    openGraph: {
      type: 'website',
      siteName: 'Sightline',
      images: [
        {
          url: '/images/icons/web-app-manifest-512x512.png',
          width: 512,
          height: 512,
          alt: 'Sightline logo',
        },
      ],
    },
  },
  // Floating heading navigation; shown only on pages with enough sections.
  TOC: true,
  // Local documentation search in the navbar; no external search service needed.
  search: true,
  // Optional navbar text does not change metadata.applicationName.
  navbar: {
    title: 'Sightline', // Text beside the logo; empty or omitted shows only the logo.
    logo: Logo, // A React component that accepts className, not an image path.
    actions: {
      // The public repository: documentation and release downloads.
      github: {
        visible: true,
        url: 'https://github.com/duhnunes/sightline-releases',
      },
      showToggleMode: true,
    },
  },
  // The landing page at '/sightline': components/home.tsx (video, features, download).
  homepage: {
    enabled: true,
    component: Home,
  },
  theme: {
    defaultTheme: 'dark',
  },
})
