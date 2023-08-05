"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, FormErrorMessage, Flex } from "@chakra-ui/react"

import { authFormScheme } from "@/utils/validationScheme"

type LoginForm = {
  name: string
  email: string
  password: string
}

const Signin = () => {
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
    signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})
  }

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box maxW="md" w="full" p="6" rounded="lg" shadow="md" borderWidth="1px">
        <Heading as="h2" size="lg" mb={2} textAlign="center">
          ログイン
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
            <Box textAlign="right">
              <Link href="/forgot-password">
                <Box color="blue" fontSize="small" mt="1">パスワードを忘れた場合</Box>
              </Link>
            </Box>
            <Box textAlign="center">
              <Button w="full" maxW="32" mt="4" colorScheme="teal" type="submit">
                ログインする
              </Button>
            </Box>
          </form>
          <Box textAlign="center">
            <Link href="/signup">
              <Button w="full" maxW="32"  colorScheme="blue">
                新規登録する
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Signin