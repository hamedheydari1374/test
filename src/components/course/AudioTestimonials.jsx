import { useState } from 'react'
import { IconPlay } from '../Icons.jsx'
import { audioTestimonials } from '../../data/course.js'

export default function AudioTestimonials() {
  const [playing, setPlaying] = useState(null)

  return (
    <section className="bg-black py-14" aria-labelledby="audio-title">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">نظر صوتی هنرجویان</p>
          <h2 id="audio-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            به تجربه هنرجویان گوش دهید
          </h2>
        </div>

        <ul className="space-y-4">
          {audioTestimonials.map(({ name, course, duration }, i) => {
            const isPlaying = playing === i
            return (
              <li
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-night-800 p-4"
              >
                <button
                  type="button"
                  aria-label={`پخش نظر صوتی ${name}`}
                  aria-pressed={isPlaying}
                  onClick={() => setPlaying(isPlaying ? null : i)}
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-900 transition hover:bg-gold-400"
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                      <path d="M8 5.5h3v13H8zM13 5.5h3v13h-3z" />
                    </svg>
                  ) : (
                    <IconPlay size={16} />
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-bold text-white">{name}</p>
                  <p className="text-[11.5px] text-white/55">{course}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gold-500 transition-all duration-[6000ms] ease-linear"
                      style={{ width: isPlaying ? '100%' : '0%' }}
                    />
                  </div>
                </div>

                <span className="shrink-0 text-[12px] text-white/50 tabular-nums">{duration}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
