import { IconCheck, IconPlay } from '../Icons.jsx'
import { modalityCompare } from '../../data/course.js'

export default function ModalityCompare({ course }) {
  return (
    <section className="bg-night-800 py-14" aria-labelledby="modality-compare-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">حضوری یا آنلاین؟</p>
          <h2 id="modality-compare-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            کدام شیوه برای شما بهتر است؟
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-5">
            {modalityCompare.map(({ title, desc, bullets }) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-night-900 p-6">
                <h3 className="text-[15px] font-extrabold text-white">{title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-white/60">{desc}</p>
                <ul className="mt-4 space-y-2.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[12.5px] text-white/75">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                        <IconCheck size={13} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <a
            href="#video"
            className="group relative flex min-h-[18rem] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black"
            aria-label={`ویدیو مقایسه شیوه‌های برگزاری ${course.title}`}
          >
            <img
              src={course.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
            />
            <span className="relative flex flex-col items-center gap-3 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-navy-900 transition group-hover:bg-gold-500">
                <IconPlay size={24} />
              </span>
              <span className="text-[14px] font-bold text-white">تماشای ویدیو مقایسه شیوه‌های آموزش</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
