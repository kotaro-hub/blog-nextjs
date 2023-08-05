"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

import Main from "@/app/components/main"
import Header from "@/app/components/header"

const Home = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin")
    }
  })

  return (
    <>
      <Header />
      <Main />
    </> 
  )
}

Home.requireAuth = true

export default Home