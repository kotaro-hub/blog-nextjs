"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { useEffect } from "react"

import { sampleData } from "./sampleData"
import { useMainStore } from "@/store/mainStore"

const Provider = ({ children }: { children: React.ReactNode}) =>{
  const { store, setStore } = useMainStore()

  useEffect(() => {
    setStore(sampleData)
  }, [store])

  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default Provider