"use client"

import useSWR from 'swr'
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react"

import { postFormScheme } from "@/utils/validationScheme"
import Checkboxs from "@/components/checkBoxs"
import type { PostTag } from "@/types/post"

const fetcher = (url: string) => fetch(url).then(r => r.json())

type PostForm = {
  title: string,
  contents: string,
  tag: PostTag[] | string[],
}

const EditForm = ({ params }: { params: { id: string }}) => {
  const {data, error, isLoading} = useSWR('/api/store', fetcher)
  
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<PostForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(postFormScheme),
  })
  
  useEffect(() => {
    if (data) {
      const currentPost = data.sampleData.posts.find((post: any) => post.id === params.id)
      if (currentPost) {
        setValue("title", currentPost.title)
        setValue("contents", currentPost.content)
        setValue("tag", currentPost.tags)
      }
    }
  }, [params.id, data])

  useEffect(() => {
    const beforeUnload = (e: any) => {
      if (Object.keys(dirtyFields).length > 0) {
        e.preventDefault();
        return e.returnValue = 'You have unsaved changes, are you sure you want to leave?';
      }
    };

    window.addEventListener('beforeunload', beforeUnload);

    return () => {
      window.removeEventListener('beforeunload', beforeUnload);
    };
  }, [dirtyFields]);
  
  const onSubmit = (data: PostForm) => {
    console.log(data)
  }
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return(
    <>
      <VStack spacing="6" p="6">
        <Heading size="lg" w="full" textAlign="center">記事を編集する</Heading>
        <Box w="full" maxW="800px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>タイトル</FormLabel>
              <Input type="text" {...register("title")} p={3}/>
              <FormErrorMessage>{ errors.title?.message }</FormErrorMessage>
            </FormControl>
            <FormControl mt="4" isInvalid={!!errors.contents}>
              <FormLabel>内容</FormLabel>
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
    </>
  )
}

export default EditForm