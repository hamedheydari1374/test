import { useEffect, useMemo, useState } from 'react'
import { IconCopy, IconClock } from './Icons.jsx'
import { toFa } from '../data/site.js'

const THREE_DAYS = 3 * 24 * 60 * 60 * 1000

function useCountdown() {
  // Fixed target set once on mount so the timer always shows a live countdown.
  const target = useMemo(() => Date.now() + THREE_DAYS, [])
  const [remaining, setRemaining] = useState(() => target - Date.now())

  useEffect(() => {
    const id = setInterval(() => setRemaining(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  const safe = Math.max(remaining, 0)
  return {
    روز: Math.floor(safe / 86_400_000),
    ساعت: Math.floor((safe / 3_600_000) % 24),
    دقیقه: Math.floor((safe / 60_000) % 60),
    ثانیه: Math.floor((safe / 1000) % 60),
  }
}

export default function TopBar() {
  const countdown = useCountdown()
  const [copied, setCopied] = useState(false)

  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText('FAN50')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="bg-mint-200 text-navy-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-2.5 text-[13px] sm:text-sm">
        <p className="font-semibold">
          جشنواره ثبت‌نام پاییز فن‌آموزان
          <span className="mr-2 rounded-md bg-gold-500 px-2 py-0.5 text-navy-900">۵۰٪ تخفیف</span>
        </p>

        <div className="flex items-center gap-1.5 font-medium tabular-nums">
          <IconClock size={15} className="opacity-70" />
          {Object.entries(countdown).map(([label, value]) => (
            <span key={label} className="flex items-center gap-1">
              <span className="min-w-8 rounded-md bg-white/70 px-1.5 py-0.5 text-center font-bold">
                {toFa(String(value).padStart(2, '0'))}
              </span>
              <span className="text-navy-900/70">{label}</span>
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={copyCoupon}
          className="flex items-center gap-1.5 rounded-md border border-dashed border-navy-900/40 bg-white/50 px-2.5 py-1 font-bold tracking-widest transition hover:bg-white"
          aria-label="کپی کد تخفیف FAN50"
        >
          <IconCopy size={14} />
          {copied ? 'کپی شد' : 'FAN50'}
        </button>
      </div>
    </div>
  )
}
