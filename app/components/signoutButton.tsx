"use client"

import { signOut } from "next-auth/react"
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"

const SignoutButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSignOut = () => {
    onClose()
    signOut()
  }

  return (
    <>
      <Button onClick={onOpen}>サインアウト</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white" color="black" boxShadow="xl">
          <ModalHeader>サインアウト</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            サインアウトしますか？
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSignOut}>
              サインアウト
            </Button>
            <Button variant="ghost" onClick={onClose}>キャンセル</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SignoutButton