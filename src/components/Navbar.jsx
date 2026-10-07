import { useState } from 'react'
import { IconChevronDown, IconSearch } from './Icons.jsx'
import { Link } from '../router.jsx'
import { navLinks, site } from '../data/site.js'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-500 text-lg font-black text-navy-900 shadow-sm">
        ف
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-extrabold text-ink">آموزشگاه فن‌آموزان</span>
        <span className="block text-[11px] text-muted">فیدار</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3" aria-label="ناوبری اصلی">
        <Logo />

        <ul className="hidden items-center gap-1 text-[14px] font-medium text-ink xl:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="flex items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-gold-50 hover:text-gold-700"
              >
                {link.label}
                {link.hasMenu && <IconChevronDown size={15} />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="جستجو"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-navy-800 transition hover:border-gold-400 hover:text-gold-700"
          >
            <IconSearch size={18} />
          </button>
          <a
            href="#branches"
            className="hidden rounded-xl bg-gold-100 px-4 py-2.5 text-[13px] font-bold text-gold-800 transition hover:bg-gold-200 sm:block"
          >
            شعب ما
          </a>
          <a
            href="#panel"
            className="hidden rounded-xl bg-gold-500 px-4 py-2.5 text-[13px] font-bold text-navy-900 shadow-sm transition hover:bg-gold-400 sm:block"
          >
            پنل کاربری
          </a>
          <button
            type="button"
            aria-label="منو"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-navy-800 xl:hidden"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-100 bg-white px-4 py-3 text-sm font-medium xl:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 hover:bg-gold-50 hover:text-gold-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-2 border-t border-slate-100 pt-3">
            <a href="#branches" className="flex-1 rounded-lg bg-gold-100 px-3 py-2.5 text-center font-bold text-gold-800">
              شعب ما
            </a>
            <a href="#panel" className="flex-1 rounded-lg bg-gold-500 px-3 py-2.5 text-center font-bold text-navy-900">
              پنل کاربری
            </a>
          </li>
          <li className="pt-3">
            <a href={site.phoneHref} className="block rounded-lg bg-slate-50 px-3 py-2.5 text-center font-semibold">
              مشاوره رایگان: <span className="tabular-nums">{site.phone}</span>
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
