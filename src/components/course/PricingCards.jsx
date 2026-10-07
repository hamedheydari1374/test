import { IconCheck } from '../Icons.jsx'
import { pricingTiers } from '../../data/course.js'

export default function PricingCards() {
  return (
    <section className="bg-night-800 py-14" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-9 text-center">
          <p className="text-[13px] font-bold text-gold-400">سطوح ثبت‌نام</p>
          <h2 id="pricing-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            سطح مناسب خودتان را انتخاب کنید
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pricingTiers.map(({ name, price, badge, featured, features }) => (
            <article
              key={name}
              className={`relative flex flex-col rounded-3xl border p-6 ${
                featured ? 'border-gold-500 bg-night-900 shadow-2xl shadow-gold-500/10 md:-translate-y-3' : 'border-white/10 bg-night-900/70'
              }`}
            >
              {badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-black text-navy-900">
                  {badge}
                </span>
              )}

              <h3 className="text-[15px] font-extrabold text-white">دوره {name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-black text-gold-400 tabular-nums">{price}</span>
                <span className="text-[12px] text-white/50">تومان</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] text-white/70">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                      <IconCheck size={13} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                className={`mt-7 block rounded-xl py-3 text-center text-[13px] font-bold transition ${
                  featured ? 'bg-gold-500 text-navy-900 hover:bg-gold-400' : 'bg-royal-500 text-white hover:bg-royal-600'
                }`}
              >
                ثبت نام
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
