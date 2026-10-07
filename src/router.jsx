import { useEffect, useState } from 'react'

const EVENT = 'app:navigate'

/** Current pathname, kept in sync with client-side navigation and browser back/forward. */
export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener('popstate', update)
    window.addEventListener(EVENT, update)
    return () => {
      window.removeEventListener('popstate', update)
      window.removeEventListener(EVENT, update)
    }
  }, [])

  return path
}

/**
 * Client-side navigation. Accepts a path, a "#section" anchor, or both ("/#courses");
 * anchors are scrolled to after the target route has rendered.
 */
export function navigate(to) {
  const [path, hash] = to.split('#')
  const nextPath = path || window.location.pathname

  if (nextPath !== window.location.pathname) {
    window.history.pushState({}, '', nextPath)
    window.dispatchEvent(new Event(EVENT))
  }

  if (hash) {
    setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
  } else {
    window.scrollTo({ top: 0 })
  }
}

/** Internal link that routes on the client instead of reloading the page. */
export function Link({ to, onClick, children, ...rest }) {
  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
        event.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
