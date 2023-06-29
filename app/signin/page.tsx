"use client"

import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, FormErrorMessage, Flex, ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { authFormScheme } from "@/utils/validationScheme";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

type LoginForm = {
  name: string
  email: string
  password: string
}

const Signin = () => {
  const router = useRouter()
  const { logIn } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(authFormScheme),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const onClickSignIn = () => {
    // ログイン処理走る
    router.push("/")
    logIn()
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
            <Box textAlign="center">
              <Button onClick={onClickSignIn} w="full" maxW="32" mt="4" colorScheme="teal" type="submit">
                ログインする
              </Button>
            </Box>
          </form>
          <Box textAlign="center">
            <Link href="/signup">
              <Button w="full" maxW="32" variant="solid" colorScheme="blue">
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