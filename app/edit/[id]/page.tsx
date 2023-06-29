"use client"

import { useEffect, useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Checkbox, CheckboxGroup, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Spacer, Textarea, VStack } from "@chakra-ui/react"

import { sampleData, sampleTag } from "@/components/sampleData"
import { usePostStore } from "@/store/postStore"
import { postFormScheme } from "@/utils/validationScheme"
import type { PostTag } from "@/types/post"
import { useRouter } from "next/navigation"
import { useNavigationEvent } from "@/utils/useNavigation"
import { useEditStore } from "@/store/editStore"

type PostForm = {
  title: string,
  contents: string,
  tag: PostTag[] | string[],
}

const EditForm = ({ params }: { params: { id: string }}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const router = useRouter()
  const cancelRef = useRef<any>(false)
  const { posts, selectedPost, setSelectedPost } = usePostStore()
  const { isEditing, setIsEditing, url } = useEditStore()
  
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, errors },
  } = useForm<PostForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(postFormScheme),
  });
  
  useNavigationEvent(() => {
    if(isEditing && isDirty) {
      setIsOpen(true)
    }
  })

  useEffect(() => {
    setIsEditing(isDirty)
  }, [isDirty])

  useEffect(() => {
    const findPost = sampleData.find(post => post.id === params.id)
    findPost && setSelectedPost(findPost)
  }, [posts])
    
  const onSubmit = (data: PostForm) => {
    console.log(data)
  }
  
  const onClose = () => {
    setIsOpen(false)
    setIsEditing(false)
  }

  return(
    <>
      <VStack spacing="6" p="6">
        <Heading size="lg" w="full" textAlign="center">記事を編集する</Heading>
        <Box w="full" maxW="800px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>タイトル</FormLabel>
              <Input type="text" {...register("title")} p={3} defaultValue={selectedPost?.title} />
              <FormErrorMessage>{ errors.title?.message }</FormErrorMessage>
            </FormControl>
            <FormControl mt="4" isInvalid={!!errors.contents}>
              <FormLabel>内容</FormLabel>
              <Textarea {...register("contents")} p={3} h="400px" defaultValue={selectedPost?.content} />
              <FormErrorMessage>{ errors.contents?.message }</FormErrorMessage>
            </FormControl>
            <FormControl mt="4" isInvalid={!!errors.tag}>
              <FormLabel>タグ</FormLabel>
              <Controller
                control={control}
                name="tag"
                defaultValue={selectedPost?.tags}
                render={({ field: { onChange, value } }) => (
                  <CheckboxGroup
                    value={value}
                    onChange={(values) => onChange(values)}
                  >
                    {sampleTag.map((tag, i) => (
                      <Checkbox value={tag.tagTitle} key={i} p={3}>
                        {tag.tagTitle}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Confirm Exit
              </AlertDialogHeader>

              <AlertDialogBody>
                You have unsaved changes. Are you sure you want to leave?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button colorScheme="red" onClick={() => {
                  setIsEditing(false);
                  router.push(url)
                }} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default EditForm