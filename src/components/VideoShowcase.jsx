import SectionHeading from './SectionHeading.jsx'
import { IconPlay } from './Icons.jsx'
import { videos } from '../data/sections.js'

export default function VideoShowcase() {
  return (
    <section id="videos" className="bg-white py-16" aria-labelledby="videos-title">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          id="videos-title"
          eyebrow="ویدیوهای فن‌آموزان"
          title="یک نگاه به کارگاه‌ها و کلاس‌های ما"
          desc="پیش از ثبت‌نام، فضای کارگاه‌ها، سبک تدریس استادان و مسیر هنرجویان را از نزدیک ببینید."
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {videos.map(({ title, duration, image }) => (
            <li key={title}>
              <a href="#video" className="group block overflow-hidden rounded-3xl border border-slate-100 bg-white">
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-navy-900 shadow-lg transition group-hover:bg-gold-500">
                      <IconPlay size={22} />
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-lg bg-black/70 px-2 py-1 text-[11px] font-bold text-white tabular-nums">
                    {duration}
                  </span>
                </div>
                <h3 className="p-4 text-[14px] font-extrabold leading-7 text-ink">{title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
