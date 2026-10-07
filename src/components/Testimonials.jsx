import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { IconArrowLeft, IconPlay } from './Icons.jsx'
import { testimonials } from '../data/sections.js'

export default function Testimonials() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  // scrollIntoView follows the RTL inline direction, so no manual direction math.
  useEffect(() => {
    const track = trackRef.current
    const card = track?.children?.[index]
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [index])

  const move = (step) => setIndex((i) => Math.min(Math.max(i + step, 0), testimonials.length - 1))

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="testimonials-title">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[13px] font-bold text-gold-600">نظر هنرجویان</p>
          <h2 id="testimonials-title" className="mt-2 text-2xl font-black text-ink sm:text-3xl">
            روایت هنرجویان از مسیر اشتغال
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="نظر قبلی"
            onClick={() => move(-1)}
            disabled={index === 0}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-navy-800 transition hover:border-gold-400 disabled:opacity-40"
          >
            <IconArrowLeft size={18} className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label="نظر بعدی"
            onClick={() => move(1)}
            disabled={index === testimonials.length - 1}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-navy-800 transition hover:border-gold-400 disabled:opacity-40"
          >
            <IconArrowLeft size={18} />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map(({ name, course, image }) => (
          <li key={name} className="w-[19rem] shrink-0 snap-center sm:w-[21rem]">
            <article className="overflow-hidden rounded-3xl border border-slate-100 bg-white">
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover opacity-85" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95 text-navy-900">
                    <IconPlay size={18} />
                  </span>
                </span>
              </div>
              <div className="p-4">
                <p className="text-[14px] font-extrabold text-ink">{name}</p>
                <p className="mt-1 text-[12px] text-muted">{course}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
