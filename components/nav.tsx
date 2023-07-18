"use client"

import { Box, HStack } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { usePathname } from "next/navigation"
import SignoutButton from "@/components/signoutButton"

const Nav = () => {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "ホーム" },
    { href: "/gallery", label: "一覧" },
    { href: "/post", label: "投稿" },
    { href: "/edit", label: "編集" },
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
      <SignoutButton />
    </HStack>
  )
}

export default Nav
