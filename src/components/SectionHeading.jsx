export default function SectionHeading({ eyebrow, title, desc, align = 'center', id }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-right items-start'
  return (
    <div className={`mb-10 flex flex-col ${alignment}`}>
      <p className="text-[13px] font-bold text-gold-600">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-2xl font-black text-ink sm:text-3xl">
        {title}
      </h2>
      {desc && <p className="mt-3 max-w-2xl text-[14px] leading-7 text-muted">{desc}</p>}
    </div>
  )
}
