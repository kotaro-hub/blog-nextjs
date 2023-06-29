'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEditStore } from '@/store/editStore'

export function NavigationEvents() {
  const { setUrl } = useEditStore()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    setUrl(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])

  return null
}