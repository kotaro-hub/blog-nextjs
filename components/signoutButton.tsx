"use client"

import { useRouter } from "next/navigation"
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"

import { useAuthStore } from "@/store/authStore"

const SignoutButton = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logOut } = useAuthStore()

  const handleSignOut = () => {
    router.push("/signin")
    onClose()
    logOut()
  }

  return (
    <>
      <Button onClick={onOpen}>サインアウト</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
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