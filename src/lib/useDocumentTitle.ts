import { useEffect } from 'react'

type UseDocumentTitleOptions = {
  prefix?: string
  separator?: string
  defaultTitle?: string
}

export function useDocumentTitle(title?: string, options?: UseDocumentTitleOptions) {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const prefix = options?.prefix ?? 'DevFlow'
    const separator = options?.separator ?? ' | '
    const defaultTitle = options?.defaultTitle ?? prefix

    const newTitle = title ? `${prefix}${separator}${title}` : defaultTitle
    const prevTitle = document.title
    document.title = newTitle

    return () => {
      document.title = prevTitle
    }
  }, [title, options?.prefix, options?.separator, options?.defaultTitle])
}

export default useDocumentTitle
