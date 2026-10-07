import SectionHeading from './SectionHeading.jsx'
import { IconCheck } from './Icons.jsx'
import { modality } from '../data/sections.js'

export default function ModalityInfo() {
  return (
    <section id="modality" className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="modality-title">
      <SectionHeading
        id="modality-title"
        eyebrow="شیوه‌های آموزش"
        title="حضوری یا مجازی؟ هر دو مسیر باز است"
        desc="بسته به شهر، زمان و هدف شغلی‌تان، شیوه‌ای را انتخاب کنید که با شرایط شما هماهنگ است."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {modality.map((item) => (
          <article key={item.key} className="overflow-hidden rounded-3xl border border-slate-100 bg-white">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100">
              <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-black text-ink">{item.title}</h3>
              <p className="mt-3 text-[13.5px] leading-7 text-muted">{item.desc}</p>

              <ul className="mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-[13px] text-ink">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-700">
                      <IconCheck size={13} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <a
                href="#courses"
                className="mt-6 block rounded-xl bg-gold-500 py-3 text-center text-[13px] font-bold text-navy-900 transition hover:bg-gold-400"
              >
                دوره‌های {item.title.replace('دوره‌های ', '')}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
