"use client"

import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { useModalStore } from "@/store/modalStore"
import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"

const SignoutButton = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useModalStore()
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