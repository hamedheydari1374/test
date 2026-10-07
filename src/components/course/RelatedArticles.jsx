import { IconArrowLeft } from '../Icons.jsx'
import { relatedArticles } from '../../data/course.js'

export default function RelatedArticles() {
  return (
    <section className="bg-night-900 py-14" aria-labelledby="related-articles-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold text-gold-400">مقالات مرتبط</p>
            <h2 id="related-articles-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
              پیش از ثبت‌نام بخوانید
            </h2>
          </div>
          <a
            href="/#magazine"
            className="group flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-[13px] font-bold text-white transition hover:border-gold-400"
          >
            همه مقالات
            <IconArrowLeft size={16} className="transition group-hover:-translate-x-1" />
          </a>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedArticles.map(({ title, category, date, image }) => (
            <li key={title}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-night-800 transition hover:border-gold-500/40">
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="w-fit rounded-lg bg-gold-500/15 px-2.5 py-1 text-[11px] font-bold text-gold-400">
                    {category}
                  </span>
                  <h3 className="mt-3 text-[13.5px] font-extrabold leading-7 text-white">{title}</h3>
                  <p className="mt-auto pt-4 text-[11.5px] text-white/45 tabular-nums">{date}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
