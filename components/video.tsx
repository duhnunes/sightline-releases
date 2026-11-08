'use client'

import { useState } from 'react'

import { Logo } from './logo'

// A YouTube video that loads only when played: until then, its thumbnail and
// a play button, so YouTube sees nothing from readers who don't watch.
// Without an id yet, a placeholder keeps the video's place on the page.
export function Video({ id, title }: { id?: string; title: string }) {
  const [playing, setPlaying] = useState(false)
  if (!id) {
    return (
      <div className="relative grid aspect-video w-full place-items-center bg-[radial-gradient(ellipse_at_center,#10232d_0%,#05080a_70%)]">
        <div className="flex flex-col items-center gap-3 text-center">
          <Logo className="size-14 opacity-80" />
          <p className="text-sm font-medium tracking-wide text-white/70">Video coming soon</p>
        </div>
      </div>
    )
  }
  return (
    <div className="relative aspect-video w-full">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 size-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            width={1280}
            height={720}
            className="size-full object-cover"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/20 transition-colors group-hover:bg-black/10">
            <span className="sl-on-accent grid size-16 place-items-center rounded-full bg-(--rdx-highlighting) shadow-lg transition-transform group-hover:scale-110 sm:size-20">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-7 sm:size-9">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
