"use client"

import useSWR from 'swr'
import { Image, Link } from "@chakra-ui/next-js"
import { useBreakpointValue, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Stack, Text, VStack } from "@chakra-ui/react"

const fetcher = (url: string) => fetch(url).then(r => r.json())

const Gallery = () => {
  const {data, error, isLoading} = useSWR('/api/posts', fetcher)

  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>

  return (
    <Grid templateColumns={gridColumns} gap={6} mt="12">
      {data.postData.posts.map((data: any) => (
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
              <ButtonGroup spacing="2">
                <Link href={`/detail/${data.id}`}>
                  <Button colorScheme="blue" width="144px" _hover={{ opacity: "0.7" }}>
                    この記事を見る
                  </Button>
                </Link>
                <Link href={`/edit/${data.id}`}>
                  <Button bg="teal.500" color="white" width="144px" _hover={{ opacity: "0.7" }}>
                    編集する
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

export default Gallery