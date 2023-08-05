"use client"

import { Link } from "@chakra-ui/next-js"
import { Box, Heading, HStack, Spacer } from "@chakra-ui/react"

import DrawerMenu from "@/app/components/drawerMenu"
import Nav from "@/app/components/nav"

const Header = () => {
  return (
    <Box shadow="md">
      <HStack p="4">
        <Link href="/" _hover={{ textDecoration: 'none', opacity: 0.8 }}>
          <Heading>Engineer BLOG</Heading>
        </Link>
        <Spacer />
        <Box display={{ base: "block", md: "none" }}>
          <DrawerMenu />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Nav />
        </Box>
      </HStack>
    </Box>
  )
}

export default Header