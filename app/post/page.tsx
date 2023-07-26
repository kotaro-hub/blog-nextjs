"use client"

import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Heading, VStack, Input, Box, Button, Textarea, Checkbox, CheckboxGroup } from "@chakra-ui/react"
import { Controller, useForm } from "react-hook-form"
import useSWR from 'swr'
import { postFormScheme } from "@/utils/validationScheme"
import type { PostTag } from "@/types/post"
import { zodResolver } from "@hookform/resolvers/zod"
import Checkboxs from "@/components/checkBoxs"

const fetcher = (url: string) => fetch(url).then(r => r.json())

export type PostForm = {
  title: string,
  contents: string,
  tag: PostTag[],
}

const Post = () => {
  const {data, error, isLoading} = useSWR('/api/tags', fetcher)
  
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm<PostForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(postFormScheme),
  })
  
  const onSubmit = (data: PostForm) => {
    console.log(data)
  }
  
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <VStack spacing="6" p="6">
      <Heading size="lg" w="full" textAlign="center">新規投稿を作成</Heading>
      <Box w="full" maxW="800px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel>タイトル</FormLabel>
            <FormHelperText>(例) Reactの思想について</FormHelperText>
            <Input type="text" {...register("title")} p={3} />
            <FormErrorMessage>{ errors.title?.message }</FormErrorMessage>
          </FormControl>
          <FormControl mt="4" isInvalid={!!errors.contents}>
            <FormLabel>内容</FormLabel>
            <FormHelperText>(例) 〇〇なことが理由、根拠はhttp://〇〇を見て"</FormHelperText>
            <Textarea {...register("contents")} p={3} h="400px" />
            <FormErrorMessage>{ errors.contents?.message }</FormErrorMessage>
          </FormControl>
          <FormControl mt="4" isInvalid={!!errors.tag}>
            <FormLabel>タグ</FormLabel>
            <Controller
              control={control}
              name="tag"
              render={({ field: { onChange, value } }) => (
                <Checkboxs value={value} onChange={(values) => onChange(values)} />
              )}
            />
            <FormErrorMessage>{ errors.tag?.message }</FormErrorMessage>
          </FormControl>
          <Box textAlign="center">
            <Button w="full" maxW="32" mt="8" colorScheme="blue" type="submit">
              内容を確認する
            </Button>
          </Box>
        </form>
      </Box>
    </VStack>
  )
}

export default Post
