import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const scrollStateKey = 'devflow-scroll-positions'

type ScrollPositions = Record<string, number>

function readScrollPositions(): ScrollPositions {
  try {
    const raw = window.sessionStorage.getItem(scrollStateKey)
    return raw ? (JSON.parse(raw) as ScrollPositions) : {}
  } catch {
    return {}
  }
}

function writeScrollPositions(positions: ScrollPositions) {
  try {
    window.sessionStorage.setItem(scrollStateKey, JSON.stringify(positions))
  } catch {
    // Ignore storage failures and fall back to the browser default.
  }
}

function ScrollToTop() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    const positions = readScrollPositions()

    if (navigationType === 'POP') {
      const savedY = positions[location.key]

      if (typeof savedY === 'number') {
        window.scrollTo(0, savedY)
        return () => {
          writeScrollPositions({
            ...positions,
            [location.key]: window.scrollY,
          })
        }
      }
    }

    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1))
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'auto', block: 'start' })
        })

        return () => {
          writeScrollPositions({
            ...positions,
            [location.key]: window.scrollY,
          })
        }
      }
    }

    window.scrollTo(0, 0)

    return () => {
      writeScrollPositions({
        ...positions,
        [location.key]: window.scrollY,
      })
    }
  }, [location.hash, location.key, location.pathname, navigationType])

  return null
}

export { ScrollToTop }
