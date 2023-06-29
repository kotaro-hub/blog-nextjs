"use client"

import { ChakraProvider } from "@chakra-ui/react"

const ChakraUIProvider = ({ children }: { children: React.ReactNode}) =>{
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default ChakraUIProvider