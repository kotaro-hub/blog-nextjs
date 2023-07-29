"use client"

import NextLink from 'next/link'
import { usePathname } from "next/navigation"
import { Link } from '@chakra-ui/react'
import { Badge, Box, Flex, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react"

import { useNotificationStore } from "@/store/notification"
import SignoutButton from "@/components/signoutButton"

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      <Box position="relative" onClick={onOpen} borderBottom={pathname === "/edit" ? "2px solid" : "none"}>
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
      </Box>
      <SignoutButton />
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent bg="white" color="black" boxShadow="xl">
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="row" justify="space-evenly" align="center" p={5}>
              <Box>
                <Link 
                  href="/edit"
                  _hover={{ textDecoration: "none", opacity: "0.7" }}
                  as={NextLink}
                  bg="blue.500"
                  color="white"
                  px={3}
                  py={2}
                  borderRadius="md"
                  >
                  新規で編集
                </Link>
              </Box>
              <Box>
                <Link 
                  href="/edit"
                  _hover={{ textDecoration: "none", opacity: "0.7" }}
                  as={NextLink}
                  bg="teal.500"
                  color="white"
                  px={3}
                  py={2}
                  borderRadius="md"
                  >
                  編集中の投稿
                </Link>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  )
}

export default Nav
