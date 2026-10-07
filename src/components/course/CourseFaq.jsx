import { IconChevronDown } from '../Icons.jsx'
import { courseFaqs } from '../../data/course.js'

export default function CourseFaq() {
  return (
    <section className="bg-night-900 py-14" aria-labelledby="course-faq-title">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">سوالات متداول</p>
          <h2 id="course-faq-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            پرسش‌های رایج درباره این دوره
          </h2>
        </div>

        <div className="space-y-3">
          {courseFaqs.map(({ q, a }, i) => (
            <details
              key={q}
              open={i === 0}
              className="group rounded-2xl border border-white/10 bg-night-800 px-5 py-4 transition open:border-gold-500/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-extrabold text-white marker:content-none">
                {q}
                <IconChevronDown size={18} className="shrink-0 text-gold-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-[13px] leading-7 text-white/60">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
