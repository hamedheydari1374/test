import { IconCertificate } from './Icons.jsx'
import { courses } from '../data/site.js'

export default function Courses() {
  return (
    <section id="courses" className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="courses-title">
      <div className="mb-10 text-center">
        <p className="text-[13px] font-bold text-gold-600">پرفروش‌ترین دوره‌ها</p>
        <h2 id="courses-title" className="mt-2 text-2xl font-black text-ink sm:text-3xl">
          دوره‌های تخصصی با ۳۰٪ تخفیف
        </h2>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map(({ title, dept, image }) => (
          <li key={title}>
            <a
              href="#course"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-lg bg-red-500 px-2 py-1 text-[11px] font-bold text-white">
                  ٪۳۰ تخفیف
                </span>
                <span className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-bold text-ink backdrop-blur">
                  {dept}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[14.5px] font-extrabold leading-7 text-ink">{title}</h3>
                <p className="mt-3 flex items-center gap-1.5 text-[12px] text-muted">
                  <IconCertificate size={15} className="text-gold-600" />
                  ارائه مدرک فنی و حرفه‌ای
                </p>
                <span className="mt-4 block rounded-xl bg-gold-50 py-2.5 text-center text-[13px] font-bold text-gold-800 transition group-hover:bg-gold-500 group-hover:text-navy-900">
                  مشاهده دوره
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
