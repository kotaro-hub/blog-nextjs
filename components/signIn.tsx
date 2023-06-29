"use client"

import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, FormErrorMessage, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { authFormScheme } from "@/utils/validationScheme";
import Link from "next/link";

type LoginForm = {
  name: string
  email: string
  password: string
}

const SignIn = () => {
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

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box maxW="md" w="full" p="6" rounded="lg" shadow="md" borderWidth="1px">
        <Heading as="h2" size="lg" mb={2} textAlign="center">
          Sign In
        </Heading>
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="name" isRequired isInvalid={!!errors.name}>
              <FormLabel>name</FormLabel>
              <Input type="text" {...register("name")} />
              <FormErrorMessage>{errors.name?.message as React.ReactNode}</FormErrorMessage>
            </FormControl>
            <FormControl mt="1" id="email" isRequired isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
              <FormErrorMessage>{errors.email?.message as React.ReactNode}</FormErrorMessage>
            </FormControl>
            <FormControl mt="1" id="password" isRequired isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
              <FormErrorMessage>{errors.password?.message as React.ReactNode}</FormErrorMessage>
            </FormControl>
            <Box textAlign="center">
              <Button mt="4" colorScheme="teal" type="submit">
                ログイン
              </Button>
            </Box>
          </form>
          <Box textAlign="center">
            <Link href="/signup">
              <Button variant="solid" colorScheme="blue">
                新規登録
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SignIn;
