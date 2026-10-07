import { useState } from 'react'
import { comments as seedComments } from '../../data/course.js'

export default function Comments() {
  const [items, setItems] = useState(seedComments)
  const [draft, setDraft] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    setItems((current) => [...current, { name: 'شما', date: 'امروز', text }])
    setDraft('')
  }

  return (
    <section className="bg-night-900 py-14" aria-labelledby="comments-title">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8">
          <p className="text-[13px] font-bold text-gold-400">پرسش و پاسخ</p>
          <h2 id="comments-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            دیدگاه هنرجویان
          </h2>
        </div>

        <ul className="space-y-4">
          {items.map((comment, i) => (
            <li key={`${comment.name}-${i}`} className="rounded-2xl border border-white/10 bg-night-800 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13.5px] font-extrabold text-white">{comment.name}</p>
                <p className="text-[11.5px] text-white/40 tabular-nums">{comment.date}</p>
              </div>
              <p className="mt-3 text-[13px] leading-7 text-white/65">{comment.text}</p>
            </li>
          ))}
        </ul>

        <form onSubmit={onSubmit} className="mt-6 rounded-2xl border border-white/10 bg-night-800 p-5">
          <label className="block">
            <span className="text-[12.5px] font-bold text-white/80">دیدگاه یا سوال شما</span>
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              rows={3}
              placeholder="سوال یا تجربه خود را بنویسید…"
              className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-night-900 px-4 py-3 text-[13px] text-white placeholder:text-white/35 focus:border-gold-400 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-4 rounded-xl bg-gold-500 px-6 py-3 text-[13px] font-bold text-navy-900 transition hover:bg-gold-400"
          >
            ارسال دیدگاه
          </button>
        </form>
      </div>
    </section>
  )
}
