"use client"

import { Box, Heading, HStack, Spacer } from "@chakra-ui/react"
import DrawerMenu from "@/components/drawerMenu"
import Nav from "@/components/nav"

const Header = () => {
  return (
    <Box shadow="md" >
      <HStack p="4">
        <Heading>Engineer BLOG</Heading>
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