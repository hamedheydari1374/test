import SectionHeading from './SectionHeading.jsx'
import { IconChevronDown } from './Icons.jsx'
import { faqs } from '../data/sections.js'

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16" aria-labelledby="faq-title">
      <SectionHeading
        id="faq-title"
        eyebrow="سوالات متداول"
        title="پرسش‌هایی که پیش از ثبت‌نام دارید"
        desc="اگر پاسخ سوال‌تان را پیدا نکردید، کارشناسان ما آماده پاسخ‌گویی هستند."
      />

      <div className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <details
            key={q}
            open={i === 0}
            className="group rounded-2xl border border-slate-100 bg-white px-5 py-4 transition open:border-gold-200 open:bg-gold-50/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-extrabold text-ink marker:content-none">
              {q}
              <IconChevronDown
                size={18}
                className="shrink-0 text-gold-600 transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-[13.5px] leading-7 text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
