import { iconByName, IconArrowLeft, IconPhone, IconPlay } from '../Icons.jsx'
import { Link } from '../../router.jsx'
import { courseSpecs } from '../../data/course.js'
import { site } from '../../data/site.js'

export default function CourseHero({ course }) {
  return (
    <section className="bg-night-900 pb-14 pt-10 text-white" aria-labelledby="course-title">
      <div className="mx-auto max-w-7xl px-4">
        <nav aria-label="مسیر صفحه" className="flex flex-wrap items-center gap-2 text-[12.5px] text-white/50">
          <Link to="/" className="transition hover:text-gold-400">
            صفحه اصلی
          </Link>
          <span>/</span>
          <Link to="/#courses" className="transition hover:text-gold-400">
            دوره‌ها
          </Link>
          <span>/</span>
          <span className="text-white/80">{course.title}</span>
        </nav>

        <div className="mt-7 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-block rounded-full bg-gold-500/15 px-3.5 py-1.5 text-[12px] font-bold text-gold-400">
              {course.dept}
            </span>
            <h1 id="course-title" className="mt-4 text-3xl font-black leading-[1.45] sm:text-4xl">
              {course.title}
            </h1>

            <p className="mt-5 max-w-2xl text-[14px] leading-8 text-white/65">
              در این دوره از صفر تا ورود به بازار کار همراه شما هستیم؛ آموزش کاملاً عملی در کارگاه مجهز، با اساتید
              باتجربه و پشتیبانی نامحدود. در پایان دوره مدرک قابل ترجمه سازمان فنی و حرفه‌ای دریافت می‌کنید و از طریق
              سامانه اشتغال به کارفرمایان معرفی می‌شوید.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#signup"
                className="group flex items-center gap-2 rounded-2xl bg-royal-500 px-6 py-3.5 font-bold text-white transition hover:bg-royal-600"
              >
                ثبت نام در دوره
                <IconArrowLeft size={17} className="transition group-hover:-translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3.5 font-bold text-white transition hover:border-gold-400 hover:text-gold-400"
              >
                <IconPhone size={17} />
                مشاوره رایگان
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[course.image, course.image].map((image, i) => (
              <a
                key={i}
                href="#video"
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-night-700"
                aria-label={`ویدیو معرفی دوره ${i + 1}`}
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-navy-900 transition group-hover:bg-gold-500">
                    <IconPlay size={20} />
                  </span>
                </span>
                <span className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-2.5 py-1 text-[11px] font-bold">
                  ویدیو {i === 0 ? 'معرفی دوره' : 'تور کارگاه'}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Course specs bar */}
        <ul className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-night-800 p-5 sm:grid-cols-3 lg:grid-cols-6">
          {courseSpecs.map(({ label, icon }) => {
            const Icon = iconByName[icon]
            return (
              <li key={label} className="flex items-center gap-2.5 text-[12.5px] font-medium text-white/80">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-500/15 text-gold-400">
                  <Icon size={17} />
                </span>
                {label}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
