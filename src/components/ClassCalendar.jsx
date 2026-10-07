import SectionHeading from './SectionHeading.jsx'
import { IconCalendar } from './Icons.jsx'
import { schedule } from '../data/sections.js'

const statusStyle = {
  'در حال ثبت‌نام': 'bg-gold-100 text-gold-800',
  'تکمیل ظرفیت': 'bg-slate-100 text-muted',
  'به‌زودی': 'bg-mint-50 text-mint-500',
}

export default function ClassCalendar() {
  return (
    <section id="schedule" className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="schedule-title">
      <SectionHeading
        id="schedule-title"
        eyebrow="تقویم آموزشی"
        title="برنامه کلاس‌های پیش‌رو"
        desc="تاریخ شروع، روزهای برگزاری و شعبه هر دوره را ببینید و در زمان مناسب ثبت‌نام کنید."
      />

      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[52rem] text-right text-[13px]">
            <thead>
              <tr className="bg-slate-50 text-ink">
                <th scope="col" className="px-5 py-4 font-extrabold">دوره</th>
                <th scope="col" className="px-5 py-4 font-extrabold">دپارتمان</th>
                <th scope="col" className="px-5 py-4 font-extrabold">تاریخ شروع</th>
                <th scope="col" className="px-5 py-4 font-extrabold">روزهای برگزاری</th>
                <th scope="col" className="px-5 py-4 font-extrabold">ساعت</th>
                <th scope="col" className="px-5 py-4 font-extrabold">شعبه</th>
                <th scope="col" className="px-5 py-4 font-extrabold">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={row.course} className={i % 2 ? 'bg-slate-50/60' : 'bg-white'}>
                  <th scope="row" className="px-5 py-4 font-bold text-ink">
                    {row.course}
                  </th>
                  <td className="px-5 py-4 text-muted">{row.dept}</td>
                  <td className="px-5 py-4 text-muted">{row.start}</td>
                  <td className="px-5 py-4 text-muted">{row.days}</td>
                  <td className="px-5 py-4 text-muted tabular-nums">{row.time}</td>
                  <td className="px-5 py-4 text-muted">{row.branch}</td>
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

      <p className="mt-5 flex items-center justify-center gap-2 text-[12.5px] text-muted">
        <IconCalendar size={16} className="text-gold-600" />
        برنامه کلاس‌ها به‌صورت هفتگی به‌روزرسانی می‌شود.
      </p>
    </section>
  )
}
