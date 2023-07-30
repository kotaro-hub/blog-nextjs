"use client"

import useSWR from 'swr'
import { Image, Link } from "@chakra-ui/next-js"
import { Badge, Button, Box, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react"

import { useNotificationStore } from "@/store/notification"

const fetcher = (url: string) => fetch(url).then(r => r.json())

const Edit = () => {
  const {data, error, isLoading} = useSWR('/api/posts', fetcher)
  const { isNotification } = useNotificationStore()
  
  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  })
  
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Box display={isNotification ? "flex" : "none"} justifyContent="flex-end">
        <Link href="/editing">
          <Button bg="teal.500" color="white" mt="4" mr="4" width="144px" _hover={{ opacity: "0.7" }}>
            編集中の投稿
            { !isNotification && (
              <Badge 
                ml="2"
                bg="red.500"
                color="white"
                borderRadius="50%"
                boxSize="16px"
                position="absolute"
                zIndex="1"
                top="-8px"
                right="-8px"
                textAlign="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >!</Badge>  
            )}
          </Button>
        </Link>
      </Box>
      <Grid templateColumns={gridColumns} gap={6} mt="4">
        {data.postData.posts.map((post: any) => (
          <GridItem key={post.id} m="0 auto" textAlign="center">
            <Card maxW="sm">
              <CardBody>
                <VStack>
                  <Image 
                    src={ post.imgSrc }
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    width="300"
                    height="200"
                  />
                </VStack>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{ post.title }</Heading>
                  <Text>{ post.content }</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justifyContent="center">
                <Link href={`/edit/${post.id}`}>
                  <Button colorScheme="blue" width="144px">
                    編集する
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default Edit