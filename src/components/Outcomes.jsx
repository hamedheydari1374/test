import SectionHeading from './SectionHeading.jsx'
import { iconByName } from './Icons.jsx'
import { outcomes } from '../data/sections.js'

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-white py-16" aria-labelledby="outcomes-title">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          id="outcomes-title"
          eyebrow="دستاوردهای دوره"
          title="در پایان دوره چه چیزی به دست می‌آورید؟"
          desc="هدف فن‌آموزان فقط آموزش نیست؛ خروجی هر دوره یک مهارت قابل عرضه در بازار کار است."
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {outcomes.map(({ title, desc, icon }) => {
            const Icon = iconByName[icon]
            return (
              <li
                key={title}
                className="rounded-3xl border border-slate-100 bg-cream p-6 transition hover:-translate-y-1 hover:border-gold-200 hover:shadow-lg hover:shadow-gold-50"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500 text-navy-900">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-[15px] font-extrabold text-ink">{title}</h3>
                <p className="mt-2.5 text-[13px] leading-7 text-muted">{desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
