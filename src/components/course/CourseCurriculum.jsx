import { IconCheck } from '../Icons.jsx'
import { courseGallery, syllabus } from '../../data/course.js'

export function CourseGallery() {
  return (
    <section className="bg-night-800 py-14" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">گالری تصاویر</p>
          <h2 id="gallery-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            نگاهی به کارگاه و کلاس‌های دوره
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {courseGallery.map((image, i) => (
            <li key={i} className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={image}
                alt={`تصویر ${i + 1} از کارگاه دوره`}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Syllabus() {
  return (
    <section className="bg-night-900 py-14" aria-labelledby="syllabus-title">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">سرفصل‌های آموزشی</p>
          <h2 id="syllabus-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            دقیقاً چه چیزی یاد می‌گیرید؟
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {syllabus.map(({ title, items }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-night-800 p-6">
              <h3 className="text-[15px] font-extrabold text-gold-400">{title}</h3>
              <ul className="mt-5 space-y-3.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/70">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                      <IconCheck size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
