import SectionHeading from './SectionHeading.jsx'
import { IconArrowLeft } from './Icons.jsx'
import { posts } from '../data/sections.js'

export default function Blog() {
  return (
    <section id="magazine" className="bg-white py-16" aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold text-gold-600">مجله فن‌آموزان</p>
            <h2 id="blog-title" className="mt-2 text-2xl font-black text-ink sm:text-3xl">
              تازه‌ترین مقالات
            </h2>
          </div>
          <a
            href="#magazine"
            className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-bold text-ink transition hover:border-gold-400"
          >
            همه مقالات
            <IconArrowLeft size={16} className="transition group-hover:-translate-x-1" />
          </a>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map(({ title, category, date, image }) => (
            <li key={title}>
              <a
                href="#post"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="w-fit rounded-lg bg-gold-50 px-2.5 py-1 text-[11px] font-bold text-gold-800">
                    {category}
                  </span>
                  <h3 className="mt-3 text-[13.5px] font-extrabold leading-7 text-ink">{title}</h3>
                  <p className="mt-auto pt-4 text-[11.5px] text-muted tabular-nums">{date}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
