import { useEffect, useRef, useState } from 'react'
import { IconArrowLeft, IconPlay } from '../Icons.jsx'
import { successStories } from '../../data/course.js'

export default function SuccessStories() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const card = trackRef.current?.children?.[index]
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [index])

  const move = (step) => setIndex((i) => Math.min(Math.max(i + step, 0), successStories.length - 1))

  return (
    <section className="bg-night-800 py-14" aria-labelledby="stories-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold text-gold-400">داستان موفقیت</p>
            <h2 id="stories-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
              هنرجویان ما الان کجا هستند؟
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="مصاحبه قبلی"
              onClick={() => move(-1)}
              disabled={index === 0}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition hover:border-gold-400 disabled:opacity-35"
            >
              <IconArrowLeft size={18} className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="مصاحبه بعدی"
              onClick={() => move(1)}
              disabled={index === successStories.length - 1}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition hover:border-gold-400 disabled:opacity-35"
            >
              <IconArrowLeft size={18} />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {successStories.map(({ name, role, image }) => (
            <li key={name} className="w-[18rem] shrink-0 snap-center">
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-night-900">
                <div className="relative aspect-video bg-black">
                  <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover opacity-70" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-navy-900">
                      <IconPlay size={18} />
                    </span>
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[14px] font-extrabold text-white">{name}</p>
                  <p className="mt-1 text-[12px] text-white/55">{role}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
