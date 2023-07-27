"use client"

import NextLink from 'next/link'
import { usePathname } from "next/navigation"
import { Link } from '@chakra-ui/react'
import { Badge, Box, HStack } from "@chakra-ui/react"

import { useNotificationStore } from "@/store/notification"
import SignoutButton from "@/components/signoutButton"

const Nav = () => {
  const pathname = usePathname()
  const { isNotification } = useNotificationStore()

  const links = [
    { href: "/", label: "ホーム" },
    { href: "/gallery", label: "一覧" },
    { href: "/post", label: "投稿" },
  ]

  return (
    <HStack as="nav">
      {links.map((link) => (
        <Box
          key={link.href}
          borderBottom={pathname === link.href ? "2px solid" : "none"}
        >
          <Link href={link.href} _hover={{ textDecoration: "none", opacity: "0.5" }} as={NextLink} >
            {link.label}
          </Link>
        </Box>
      ))}
      <Box borderBottom={pathname === "/edit" ? "2px solid" : "none"}>
        <Link href={"/edit"} _hover={{ textDecoration: "none", opacity: "0.5" }} as={NextLink} position="relative" >
          編集
          { isNotification && (
            <Badge 
              ml="2"
              bg="red.500"
              color="white"
              borderRadius="50%"
              boxSize="16px"
              position="absolute"
              zIndex="-1"
              top="-8px"
              right="-8px"
              textAlign="center"
            >!</Badge>  
          )}
        </Link>
      </Box>
      <SignoutButton />
    </HStack>
  )
}

export default Nav
