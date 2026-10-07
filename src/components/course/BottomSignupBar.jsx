import { iconByName } from '../Icons.jsx'
import { courseSpecs } from '../../data/course.js'

export default function BottomSignupBar({ course, price = '۴٫۹۰۰٫۰۰۰' }) {
  return (
    <section className="border-y border-white/10 bg-night-800 py-8" aria-label="نوار ثبت‌نام دوره">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4">
        <div>
          <p className="text-[13px] font-extrabold text-white">{course.title}</p>
          <p className="mt-1 text-[12px] text-white/50">ظرفیت محدود · شروع دوره از ۱۴ مهر</p>
        </div>

        <ul className="hidden items-center gap-5 lg:flex">
          {courseSpecs.slice(0, 4).map(({ label, icon }) => {
            const Icon = iconByName[icon]
            return (
              <li key={label} className="flex items-center gap-2 text-[12px] text-white/70">
                <Icon size={15} className="text-gold-400" />
                {label}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-4">
          <p className="text-left">
            <span className="block text-lg font-black text-gold-400 tabular-nums">{price}</span>
            <span className="block text-[11px] text-white/50">تومان</span>
          </p>
          <a
            href="#signup"
            className="rounded-xl bg-royal-500 px-6 py-3 text-[13px] font-bold text-white transition hover:bg-royal-600"
          >
            ثبت نام در دوره
          </a>
        </div>
      </div>
    </section>
  )
}
