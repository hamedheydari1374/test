import { IconPlay } from '../Icons.jsx'
import { studentAvatars } from '../../data/course.js'

export default function StudentAvatars() {
  return (
    <section className="bg-black py-14" aria-labelledby="avatars-title">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-[13px] font-bold text-gold-400">تجربه هنرجویان</p>
        <h2 id="avatars-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
          هنرجویان دوره چه می‌گویند؟
        </h2>

        <ul className="mt-9 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {studentAvatars.map((name) => (
            <li key={name}>
              <button
                type="button"
                aria-label={`ویدیو نظر ${name}`}
                className="group flex w-full flex-col items-center gap-2.5"
              >
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-xl font-black text-navy-900 transition group-hover:scale-105">
                  {name.charAt(0)}
                  <span className="absolute -bottom-1 -left-1 grid h-8 w-8 place-items-center rounded-full border-2 border-black bg-white text-navy-900 transition group-hover:bg-gold-500">
                    <IconPlay size={13} />
                  </span>
                </span>
                <span className="text-[12px] text-white/70">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
