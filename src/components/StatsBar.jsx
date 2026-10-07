import { stats } from '../data/site.js'

export default function StatsBar() {
  return (
    <section className="border-y border-slate-100 bg-white" aria-label="آمار آموزشگاه">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <dt className="text-3xl font-black text-gold-600 lg:text-4xl">{value}</dt>
            <dd className="mt-2 text-[13px] font-medium text-muted">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
