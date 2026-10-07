const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ size = 18, children, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...stroke} {...rest}>
      {children}
    </svg>
  )
}

export function IconCheck({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 2.5l2.4 1.8 3-.2.9 2.8 2.4 1.7-1 2.9 1 2.8-2.4 1.8-.9 2.8-3-.2-2.4 1.8-2.4-1.8-3 .2-.9-2.8-2.4-1.8 1-2.8-1-2.9 2.4-1.7.9-2.8 3 .2L12 2.5Z" />
      <path d="m9.2 12 2 2 3.6-3.7" />
    </Svg>
  )
}

export function IconWorkshop({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <rect x="2.5" y="7.5" width="19" height="12" rx="2.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M2.5 12.5h19M10 12.5v2h4v-2" />
    </Svg>
  )
}

export function IconSupport({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 13.5v-1.7a8 8 0 0 1 16 0v1.7" />
      <rect x="2.6" y="13" width="4" height="6" rx="1.8" />
      <rect x="17.4" y="13" width="4" height="6" rx="1.8" />
      <path d="M20 19v.4a2.6 2.6 0 0 1-2.6 2.6H13" />
    </Svg>
  )
}

export function IconCertificate({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  )
}

export function IconDorm({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M3.5 10.5 12 4l8.5 6.5V20h-17v-9.5Z" />
      <path d="M9.5 20v-5.4h5V20" />
    </Svg>
  )
}

export function IconBriefcase({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3" y="8" width="18" height="12" rx="2.2" />
      <path d="M8 8V6.4A1.4 1.4 0 0 1 9.4 5h5.2A1.4 1.4 0 0 1 16 6.4V8M3 13h18" />
    </Svg>
  )
}

export function IconHybrid({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3" y="4.5" width="11" height="8" rx="1.6" />
      <path d="M8.5 12.5v2.2M6 14.7h5" />
      <circle cx="17" cy="15.2" r="2.4" />
      <path d="M13.6 20.4c.5-1.6 1.8-2.6 3.4-2.6s2.9 1 3.4 2.6" />
    </Svg>
  )
}

export function IconSpark({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" />
    </Svg>
  )
}

export function IconPhone({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.7.8a2 2 0 0 1 1.7 2Z" />
    </Svg>
  )
}

export function IconArrowLeft({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
    </Svg>
  )
}

export function IconSearch({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Svg>
  )
}

export function IconChevronDown({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  )
}

export function IconPin({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  )
}

export function IconInstagram({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </Svg>
  )
}

export function IconTelegram({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M21 4 3 11.5l5.2 1.8L10.5 20l3-4.2 5.5 3L21 4Z" />
      <path d="m8.2 13.3 7.6-6" />
    </Svg>
  )
}

export function IconYoutube({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m11 9.5 4 2.5-4 2.5v-5Z" />
    </Svg>
  )
}

export function IconCopy({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5" />
    </Svg>
  )
}

export function IconClock({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  )
}

export function IconStar({ size = 16, className }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6Z" />
    </svg>
  )
}

export function IconPlay({ size = 20, className }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  )
}

export function IconCross({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </Svg>
  )
}

export function IconCalendar({ size, className }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2.4" />
      <path d="M3 10h18M8 3.5V6M16 3.5V6" />
    </Svg>
  )
}

export const iconByName = {
  workshop: IconWorkshop,
  support: IconSupport,
  certificate: IconCertificate,
  dorm: IconDorm,
  briefcase: IconBriefcase,
  hybrid: IconHybrid,
  instagram: IconInstagram,
  telegram: IconTelegram,
  youtube: IconYoutube,
}
