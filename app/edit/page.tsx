"use client"

import { sampleData } from "@/components/sampleData"
import { usePostStore } from "@/store/postStore"
import { Image, Link } from "@chakra-ui/next-js"
import { Button, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import { useEffect } from "react"

const Edit = () => {
  const { posts, setPosts } = usePostStore()

  useEffect(() => {
    setPosts(sampleData)
  }, [sampleData])

  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  return (
    <Grid templateColumns={gridColumns} gap={6} mt="12">
      {posts.map(data => (
        <GridItem key={data.id} m="0 auto" textAlign="center">
          <Card maxW="sm">
            <CardBody>
              <VStack>
                <Image 
                  src={ data.imgSrc }
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width="300"
                  height="200"
                />
              </VStack>
              <Stack mt="6" spacing="3">
                <Heading size="md">{ data.title }</Heading>
                <Text>{ data.content }</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent="center">
              <Link href={`/edit/${data.id}`}>
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