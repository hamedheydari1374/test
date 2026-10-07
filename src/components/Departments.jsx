import { IconArrowLeft } from './Icons.jsx'
import { departments } from '../data/site.js'

export default function Departments() {
  return (
    <section id="departments" className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="departments-title">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[13px] font-bold text-gold-600">دپارتمان‌های تخصصی</p>
          <h2 id="departments-title" className="mt-2 text-2xl font-black text-ink sm:text-3xl">
            از کدام حوزه می‌خواهید شروع کنید؟
          </h2>
        </div>
        <a
          href="#courses"
          className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-bold text-ink transition hover:border-gold-400"
        >
          همه دوره‌ها
          <IconArrowLeft size={16} className="transition group-hover:-translate-x-1" />
        </a>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {departments.map(({ name, desc, icon }) => (
          <li key={name}>
            <a
              href="#courses"
              className="group flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-gold-200 hover:shadow-lg hover:shadow-gold-100"
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold-50 transition group-hover:bg-gold-100">
                <img src={icon} alt="" width="40" height="40" loading="lazy" className="h-10 w-10 object-contain" />
              </span>
              <h3 className="mt-4 text-[14px] font-extrabold text-ink">{name}</h3>
              <p className="mt-1.5 text-[12px] leading-6 text-muted">{desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
