"use client"
import React, { useEffect } from "react"

import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"
import Header from "./header"

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { isLoggedIn } = useAuthStore()

  useEffect(() => {
    // TODO: ここにすでに新規登録されている場合の処理かく？

    if(!isLoggedIn) {
      router.push("/signup")
    }

  }, [isLoggedIn])

  return (
    <>
      { isLoggedIn ? (
        <>
          <Header />
          {children}
        </>
      ) : (
        children
      )}
    </>
  )
}

export default AuthChecker