import SectionHeading from './SectionHeading.jsx'
import { IconCheck, IconCross } from './Icons.jsx'
import { compareRows } from '../data/sections.js'

function Mark({ ok }) {
  return ok ? (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-gold-100 text-gold-700">
      <IconCheck size={14} />
    </span>
  ) : (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-400">
      <IconCross size={14} />
    </span>
  )
}

export default function BenefitsCompare() {
  return (
    <section id="benefits" className="bg-white py-16" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="benefits-title"
          eyebrow="مقایسه مزایا"
          title="کدام شیوه آموزش برای شما مناسب است؟"
          desc="مزایای دوره‌های حضوری و مجازی را کنار هم ببینید تا انتخاب دقیق‌تری داشته باشید."
        />

        <div className="overflow-hidden rounded-3xl border border-slate-100">
          <table className="w-full text-[13.5px]">
            <thead>
              <tr className="bg-slate-50 text-ink">
                <th scope="col" className="px-5 py-4 text-right font-extrabold">
                  ویژگی
                </th>
                <th scope="col" className="px-5 py-4 text-center font-extrabold">
                  حضوری
                </th>
                <th scope="col" className="px-5 py-4 text-center font-extrabold">
                  مجازی
                </th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(({ label, onsite, online }, i) => (
                <tr key={label} className={i % 2 ? 'bg-slate-50/60' : 'bg-white'}>
                  <th scope="row" className="px-5 py-4 text-right font-medium text-muted">
                    {label}
                  </th>
                  <td className="px-5 py-4">
                    <Mark ok={onsite} />
                  </td>
                  <td className="px-5 py-4">
                    <Mark ok={online} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
