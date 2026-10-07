import { iconByName, IconPhone, IconPin } from './Icons.jsx'
import { footerColumns, site, socials } from '../data/site.js'

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-500 text-lg font-black text-navy-900">
              ف
            </span>
            <span className="text-[15px] font-extrabold text-white">آموزشگاه فن‌آموزان</span>
          </div>
          <p className="mt-4 max-w-sm text-[13px] leading-7">
            {site.tagline} — آموزش عملی، پروژه‌محور و مسیری روشن از یادگیری تا اشتغال.
          </p>

          <div className="mt-5 flex gap-2">
            {socials.map(({ label, href, icon }) => {
              const Icon = iconByName[icon]
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/80 transition hover:bg-gold-500 hover:text-navy-900"
                >
                  <Icon size={17} />
                </a>
              )
            })}
          </div>
        </div>

        {footerColumns.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-[14px] font-extrabold text-white">{title}</h3>
            <ul className="mt-4 space-y-3 text-[13px]">
              {links.map((link) => (
                <li key={link}>
                  <a href="#top" className="transition hover:text-gold-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-[12.5px]">
          <p className="flex items-center gap-2">
            <IconPin size={15} className="text-gold-500" />
            {site.address}
          </p>
          <a href={site.phoneHref} className="flex items-center gap-2 font-bold text-white hover:text-gold-400">
            <IconPhone size={15} className="text-gold-500" />
            <span className="tabular-nums">{site.phone}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-[12px] text-white/50">
        © تمامی حقوق برای آموزشگاه فن‌آموزان محفوظ است.
      </div>
    </footer>
  )
}
