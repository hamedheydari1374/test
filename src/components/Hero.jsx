import { useState } from 'react'
import { iconByName, IconArrowLeft, IconCheck, IconPhone, IconSpark, IconStar } from './Icons.jsx'
import { benefits, heroOrbit, site } from '../data/site.js'

const INSTRUCTOR_IMG =
  'https://fanamoozan.com/person/%D9%85%D8%B3%D8%B9%D9%88%D8%AF%20%D8%A7%D9%86%D8%B5%D8%A7%D8%B1%DB%8C-%D8%AF%D8%A7%DA%A9%D8%AA%20%D8%A7%D8%B3%D9%BE%DB%8C%D9%84%DB%8C%D8%AA.webp'

function Orbit() {
  const [active, setActive] = useState(0)
  const [imageOk, setImageOk] = useState(true)
  const current = heroOrbit[active]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {/* soft ambient blobs + grid */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute -right-6 top-4 h-40 w-40 rounded-full bg-[#4f9dff]/15 blur-2xl" />
        <span className="absolute -left-4 bottom-10 h-52 w-52 rounded-full bg-gold-400/20 blur-3xl" />
      </div>

      {/* dashed ring with orbiting department chips */}
      <div
        aria-hidden="true"
        className="absolute inset-[5%] rounded-full border border-dashed border-slate-200 animate-fz-spin"
      >
        {heroOrbit.map((item, i) => {
          const angle = (i / heroOrbit.length) * 2 * Math.PI - Math.PI / 2
          const left = 50 + 50 * Math.cos(angle)
          const top = 50 + 50 * Math.sin(angle)
          return (
            <div
              key={item.name}
              className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div className="h-full w-full animate-fz-spin-rev">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={`${item.name} — ${item.person}`}
                  className={`grid h-16 w-16 place-items-center rounded-full border bg-white shadow-sm transition ${
                    active === i ? 'border-transparent ring-2 ring-offset-2' : 'border-slate-200 hover:shadow-md'
                  }`}
                  style={active === i ? { boxShadow: `0 0 0 6px ${item.accent}22` } : undefined}
                >
                  <img
                    src={item.icon}
                    alt=""
                    width="40"
                    height="40"
                    loading="lazy"
                    className="h-9 w-9 object-contain"
                  />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* center instructor */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative h-[46%] w-[46%] overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-gold-200 to-gold-400 shadow-xl">
          {imageOk ? (
            <img
              src={INSTRUCTOR_IMG}
              alt={`${current.person} — مدرس دپارتمان ${current.name}`}
              className="h-full w-full object-cover"
              onError={() => setImageOk(false)}
            />
          ) : (
            <span className="grid h-full w-full place-items-center text-3xl font-black text-navy-900">ف</span>
          )}
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute -right-1 top-6 animate-fz-float rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur sm:top-10">
        <p className="flex items-center gap-1.5 text-[12px] font-bold text-ink">
          <IconCheck size={15} className="text-gold-600" />
          مدرک فنی و حرفه‌ای
        </p>
        <p className="text-[11px] text-muted">قابل ترجمه رسمی</p>
      </div>

      <div
        className="absolute -left-1 bottom-16 animate-fz-float rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur sm:bottom-20"
        style={{ animationDelay: '1.2s' }}
      >
        <p className="flex items-center gap-1.5 text-[12px] font-bold text-ink">
          <IconStar size={14} className="text-gold-500" />
          ۴.۹ از ۵
        </p>
        <p className="text-[11px] text-muted">رضایت هنرجویان</p>
      </div>

      <div
        className="absolute bottom-2 right-2 animate-fz-float rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur"
        style={{ animationDelay: '0.6s' }}
      >
        <p className="text-[12px] font-bold text-ink">کارگاه مجهز</p>
        <p className="text-[11px] text-muted">آموزش ۷۰٪ عملی</p>
      </div>

      {/* active instructor caption */}
      <div className="absolute inset-x-0 -bottom-2 mx-auto w-fit rounded-2xl border border-slate-100 bg-white px-4 py-2 text-center shadow-md">
        <p className="text-[13px] font-extrabold text-ink">{current.person}</p>
        <p className="text-[11px] text-muted">
          {current.name} · دپارتمان {current.name}
        </p>
      </div>

      {/* dots */}
      <div className="absolute inset-x-0 -bottom-10 flex items-center justify-center gap-1.5">
        {heroOrbit.map((item, i) => (
          <button
            key={item.name}
            type="button"
            aria-label={`نمایش ${item.name}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${active === i ? 'w-6 bg-gold-500' : 'w-2 bg-slate-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" aria-label="معرفی آموزشگاه فن‌آموزان">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-gold-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-12 lg:grid-cols-2 lg:pb-24 lg:pt-16">
        <div>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-gold-200 bg-gold-50 px-3.5 py-1.5 text-[12px]">
            <IconCheck size={15} className="text-gold-600" />
            <span className="font-bold text-ink">آموزشگاه فنی و حرفه‌ای فن‌آموزان</span>
            <span className="text-muted">دارای</span>
            <span className="font-semibold text-gold-700">مجوز رسمی سازمان آموزش فنی و حرفه‌ای کشور</span>
          </div>

          <h1 className="mt-6 text-3xl font-black leading-[1.35] text-ink sm:text-4xl lg:text-[2.6rem]">
            مسیر شغلی خود را با{' '}
            <span className="relative inline-block rounded-xl bg-gold-400 px-2.5 text-navy-900">فن‌آموزان</span>{' '}
            بسازید
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted">
            از یادگیری مهارت‌های تخصصی تا ورود به بازار کار؛ آموزش عملی در کارگاه‌های مجهز، با اساتید باتجربه و مسیری
            روشن برای شروع شغل و کسب درآمد شما.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="مزایای آموزش در فن‌آموزان">
            {benefits.map(({ label, icon }) => {
              const Icon = iconByName[icon]
              return (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-medium text-ink"
                >
                  <Icon size={15} className="text-gold-600" />
                  {label}
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#courses"
              className="group flex items-center gap-2.5 rounded-2xl bg-gold-500 px-5 py-3 font-bold text-navy-900 shadow-sm transition hover:bg-gold-400"
            >
              <IconSpark size={18} />
              <span className="flex flex-col leading-tight">
                <span>مشاهده دوره‌ها</span>
                <span className="text-[11px] font-medium text-navy-900/70">۱۸۰+ دوره فعال</span>
              </span>
              <IconArrowLeft size={17} className="transition group-hover:-translate-x-1" />
            </a>

            <a
              href={site.phoneHref}
              className="group flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-ink transition hover:border-gold-400"
            >
              <IconPhone size={17} className="text-gold-600" />
              <span className="flex flex-col leading-tight">
                <span>مشاوره رایگان</span>
                <span className="text-[11px] font-medium tabular-nums text-muted">{site.phone}</span>
              </span>
              <IconArrowLeft size={17} className="transition group-hover:-translate-x-1" />
            </a>

            <a
              href="#schedule"
              className="group flex items-center gap-2 rounded-2xl px-3 py-3 font-bold text-ink transition hover:text-gold-700"
            >
              برنامه کلاس‌ها
              <IconArrowLeft size={17} className="transition group-hover:-translate-x-1" />
            </a>
          </div>
        </div>

        <Orbit />
      </div>
    </section>
  )
}
