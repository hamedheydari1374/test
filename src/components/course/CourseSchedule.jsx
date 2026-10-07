import { courseSchedule } from '../../data/course.js'

const statusStyle = {
  'ثبت نام باز': 'bg-gold-500/15 text-gold-400',
  'در حال ثبت‌نام': 'bg-royal-500/15 text-royal-500',
  'تکمیل شده': 'bg-white/10 text-white/50',
}

export default function CourseSchedule() {
  return (
    <section className="bg-night-900 py-14" aria-labelledby="course-schedule-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">تقویم برگزاری</p>
          <h2 id="course-schedule-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            تاریخ‌های شروع دوره
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] text-right text-[13px]">
              <thead>
                <tr className="bg-night-800 text-white">
                  <th scope="col" className="px-5 py-4 font-extrabold">تاریخ شروع</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">روزهای برگزاری</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">ساعت</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">شعبه</th>
                  <th scope="col" className="px-5 py-4 font-extrabold">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {courseSchedule.map((row, i) => (
                  <tr key={row.start} className={i % 2 ? 'bg-night-800/50' : 'bg-transparent'}>
                    <th scope="row" className="px-5 py-4 text-right font-bold text-white">
                      {row.start}
                    </th>
                    <td className="px-5 py-4 text-white/60">{row.days}</td>
                    <td className="px-5 py-4 text-white/60 tabular-nums">{row.time}</td>
                    <td className="px-5 py-4 text-white/60">{row.branch}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block rounded-lg px-2.5 py-1 text-[11px] font-bold ${statusStyle[row.status]}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
