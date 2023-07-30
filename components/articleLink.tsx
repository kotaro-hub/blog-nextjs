"use client"

import useSWR from 'swr'
import { Image, Link } from "@chakra-ui/next-js"
import { useBreakpointValue, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Stack, Text, VStack } from "@chakra-ui/react"

const fetcher = (url: string) => fetch(url).then(r => r.json())

const ArticleLink = () => {
  const {data, error, isLoading} = useSWR('/api/store', fetcher)

  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  })

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <Grid templateColumns={gridColumns} gap={6} mt="12">
      {data.sampleData.posts.map((post: any) => (
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
              <ButtonGroup spacing="2">
                <Link href={`/detail/${post.id}`}>
                  <Button colorScheme="blue" _hover={{ opacity: "0.7" }}>
                    この記事を見る
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button bg="teal.500" color="white" _hover={{ opacity: "0.7" }}>
                    記事一覧を見る
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ArticleLink