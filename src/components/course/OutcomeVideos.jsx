import { IconPlay } from '../Icons.jsx'
import { outcomeVideos } from '../../data/course.js'

export default function OutcomeVideos() {
  return (
    <section className="bg-night-900 py-14" aria-labelledby="outcome-videos-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">خروجی دوره در عمل</p>
          <h2 id="outcome-videos-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            مسیر هنرجویان تا بازار کار
          </h2>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {outcomeVideos.map(({ title, duration, image }) => (
            <li key={title}>
              <a href="#video" className="group block overflow-hidden rounded-3xl border border-white/10 bg-night-800">
                <div className="relative aspect-video bg-black">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-navy-900 transition group-hover:bg-gold-500">
                      <IconPlay size={20} />
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-lg bg-black/70 px-2 py-1 text-[11px] font-bold text-white tabular-nums">
                    {duration}
                  </span>
                </div>
                <h3 className="p-4 text-[13.5px] font-extrabold leading-7 text-white">{title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
