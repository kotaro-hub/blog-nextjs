"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendPasswordResetEmail } from "firebase/auth"
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, FormErrorMessage, Flex } from "@chakra-ui/react"

import { auth } from "@/app/firebase"
import { authFormScheme } from "@/utils/validationScheme"

type LoginForm = {
  email: string
}

const ForgotPassword = () => {
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
    const { email } = data
    sendPasswordResetEmail(auth, email)
  }

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box maxW="md" w="full" p="6" rounded="lg" shadow="md" borderWidth="1px">
        <Heading as="h2" size="lg" mb={2} textAlign="center">
          パスワードを再設定
        </Heading>
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="4" id="email" isRequired isInvalid={!!errors.email}>
              <FormLabel>メールアドレス</FormLabel>
              <Input type="email" {...register("email")} />
              <FormErrorMessage>{errors.email?.message as React.ReactNode}</FormErrorMessage>
            </FormControl>
            <Box textAlign="center" mt="4">
              <Button w="full" mt="4" colorScheme="blue" type="submit">
                再設定メールを送る
              </Button>
            </Box>
          </form>
        </Stack>
      </Box>
    </Flex>
  )
}

export default ForgotPassword