"use client"

import { useEditStore } from "@/store/editStore";
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export const useNavigationEvent = (onPathnameChange: () => void) => {
  const { url } = useEditStore()

  console.log('ここまではよばれるはず')

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentUrl = `${pathname}?${searchParams}`

  useEffect(() => {
    console.log("よばれない")
    console.log(url)
    console.log(currentUrl)
    if (url !== currentUrl) {
      onPathnameChange()
    }
  }, [pathname, onPathnameChange]);
};

