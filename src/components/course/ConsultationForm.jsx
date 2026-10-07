import { useState } from 'react'
import { IconCheck } from '../Icons.jsx'

export default function ConsultationForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.target.reset()
  }

  return (
    <section id="signup" className="bg-night-900 py-14" aria-labelledby="consult-title">
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-[2rem] bg-gold-500 p-6 text-navy-900 sm:p-10">
          <div className="grid gap-9 lg:grid-cols-2">
            <div>
              <p className="text-[13px] font-black text-navy-900/70">مشاوره رایگان</p>
              <h2 id="consult-title" className="mt-2 text-2xl font-black leading-[1.6] sm:text-[1.7rem]">
                شماره‌تان را بگذارید، کارشناسان ما تماس می‌گیرند
              </h2>
              <p className="mt-4 max-w-md text-[13.5px] leading-7 text-navy-900/75">
                درباره سطح دوره، شهریه، تاریخ شروع و شرایط اقساط راهنمایی‌تان می‌کنیم. مشاوره کاملاً رایگان است.
              </p>

              <ul className="mt-6 space-y-2.5">
                {['پاسخ‌گویی در کمتر از یک روز کاری', 'مشاوره تخصصی مسیر شغلی', 'بدون هیچ هزینه‌ای'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] font-semibold">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-navy-900 text-gold-400">
                      <IconCheck size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl bg-navy-900/95 p-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-[12.5px] font-bold text-white/80">نام و نام خانوادگی</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="مثلاً علی رضایی"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-night-800 px-4 py-3 text-[13px] text-white placeholder:text-white/35 focus:border-gold-400 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[12.5px] font-bold text-white/80">شماره تماس</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="tel"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-night-800 px-4 py-3 text-[13px] text-white placeholder:text-white/35 focus:border-gold-400 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[12.5px] font-bold text-white/80">سوال یا توضیح شما</span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="مثلاً برای دوره حضوری اقساطی امکان‌پذیر است؟"
                    className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-night-800 px-4 py-3 text-[13px] text-white placeholder:text-white/35 focus:border-gold-400 focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-gold-500 py-3.5 text-[13.5px] font-black text-navy-900 transition hover:bg-gold-400"
              >
                درخواست مشاوره رایگان
              </button>

              {sent && (
                <p role="status" className="mt-3 rounded-xl bg-mint-500/15 px-4 py-2.5 text-center text-[12.5px] font-bold text-mint-200">
                  درخواست شما ثبت شد. کارشناسان ما به‌زودی تماس می‌گیرند.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
