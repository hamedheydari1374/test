import { IconArrowLeft, IconPhone } from './Icons.jsx'
import { courses, site } from '../data/site.js'

export default function CareerCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="career-cta-title">
      <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-navy-900 p-6 text-white sm:p-10 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-bold text-gold-400">مشاوره مسیر شغلی</p>
          <h2 id="career-cta-title" className="mt-3 text-2xl font-black leading-[1.6] sm:text-[1.75rem]">
            نمی‌دانید از کجا شروع کنید؟ مسیر شغلی‌تان را با کارشناسان ما بچینید
          </h2>
          <p className="mt-4 max-w-lg text-[13.5px] leading-7 text-white/70">
            کارشناسان فن‌آموزان بر اساس علاقه، شهر و فرصت‌های شغلی منطقه شما، مسیر یادگیری و بازار کار مناسب را پیشنهاد
            می‌دهند — از انتخاب دوره تا راه‌اندازی کسب‌وکار.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-2 rounded-2xl bg-gold-500 px-5 py-3 font-bold text-navy-900 transition hover:bg-gold-400"
            >
              <IconPhone size={17} />
              دریافت مشاوره رایگان
              <IconArrowLeft size={17} className="transition group-hover:-translate-x-1" />
            </a>
            <a
              href="#courses"
              className="rounded-2xl border border-white/20 px-5 py-3 font-bold text-white transition hover:border-gold-400"
            >
              دیدن دوره‌ها
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={courses[6].image}
              alt="مشاوره مسیر شغلی فن‌آموزان"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-4 rounded-2xl bg-white px-4 py-3 text-navy-900 shadow-xl sm:right-6">
            <p className="text-[12px] font-bold">مشاوره تخصصی</p>
            <p className="text-[11px] text-muted tabular-nums">{site.phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
