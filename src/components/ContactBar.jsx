import { iconByName, IconPin, IconPhone } from './Icons.jsx'
import { site, socials } from '../data/site.js'

export default function ContactBar() {
  return (
    <div className="hidden border-b border-slate-100 bg-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2.5 text-[13px] text-muted">
        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon }) => {
            const Icon = iconByName[icon]
            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-8 w-8 place-items-center rounded-full bg-slate-50 text-navy-800 transition hover:bg-gold-100 hover:text-gold-700"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>

        <p className="flex items-center gap-1.5">
          <IconPin size={15} className="text-gold-600" />
          {site.address}
        </p>

        <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold text-ink hover:text-gold-700">
          <IconPhone size={15} className="text-gold-600" />
          <span className="tabular-nums">{site.phone}</span>
        </a>
      </div>
    </div>
  )
}
