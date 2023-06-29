"use client"

import { Image, Link } from "@chakra-ui/next-js";
import { useBreakpointValue, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Stack, Text, VStack } from "@chakra-ui/react";

import { sampleData } from "@/components/sampleData"
import { usePostStore } from "@/store/postStore";
import { useEffect } from "react";

const Gallery = () => {
  const { setPosts, posts } = usePostStore()

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
              <ButtonGroup spacing="2">
                <Link href={`/articles/${data.id}`}>
                  <Button variant="solid" colorScheme="blue">
                    この記事を見る
                  </Button>
                </Link>
                <Link href={`/edit/${data.id}`}>
                  <Button variant="ghost" colorScheme="blue">
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