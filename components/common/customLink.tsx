"use client"

import { usePostStore } from '@/store/postStore'
import NextLink from 'next/link'
import { Link } from "@chakra-ui/next-js"
import { useRouter } from 'next/navigation'
import React from 'react'

const CustomLink = ({ to, children }: { to: string, children: React.ReactNode}) => {
  const router = useRouter()
  const { isFormDirty } = usePostStore() // add this to your store
  
  const handleClick = (event: any) => {
    if (isFormDirty) {
      event.preventDefault()
      
    } else {
      router.push(to) // if not dirty, perform the page transition
    }
  }

  return (
    <Link href={to} onClick={handleClick} _hover={{ textDecoration: "none", opacity: "0.5" }} as={NextLink}>
      {children}
    </Link>
  )
}

export default CustomLink