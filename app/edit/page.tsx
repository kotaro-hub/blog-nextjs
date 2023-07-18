"use client"

import { Image, Link } from "@chakra-ui/next-js"
import { Button, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

const Edit = () => {
  const {data, error, isLoading} = useSWR('/api/posts', fetcher)
  
  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  })
  
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <Grid templateColumns={gridColumns} gap={6} mt="12">
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
                <Button variant="solid" colorScheme="blue">
                  編集する
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </Grid>
  )
}

export default Edit