"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, FormErrorMessage, Flex } from "@chakra-ui/react"

import { authFormScheme } from "@/utils/validationScheme"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebase"

type LoginForm = {
  email: string
  password: string
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(authFormScheme),
  })
  
  const onSubmit = (data: LoginForm) => {
    const { email, password } = data
    createUserWithEmailAndPassword(auth, email, password) 
  }

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box maxW="md" w="full" p="6" rounded="lg" shadow="md" borderWidth="1px">
        <Heading as="h2" size="lg" mb={2} textAlign="center">
          新規登録
        </Heading>
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="1" id="email" isRequired isInvalid={!!errors.email}>
              <FormLabel>メールアドレス</FormLabel>
              <Input type="email" {...register("email")} />
              <FormErrorMessage>{errors.email?.message as React.ReactNode}</FormErrorMessage>
            </FormControl>
            <FormControl mt="1" id="password" isRequired isInvalid={!!errors.password}>
              <FormLabel>パスワード</FormLabel>
              <Input type="password" {...register("password")} />
              <FormErrorMessage>{errors.password?.message as React.ReactNode}</FormErrorMessage>
            </FormControl>
            <Box textAlign="center">
              <Button w="full" maxW="32" mt="4" colorScheme="teal" type="submit">
                登録する
              </Button>
            </Box>
          </form>
          <Box textAlign="center">
            <Link href="/signin">
              <Button w="full" maxW="32"  colorScheme="blue">
                ログインする
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Signup
