"use client"

import { Box, Heading, Text } from "@chakra-ui/react"

const Article = ({ params }: { params: { id: string }}) => {
  return (
    <Box>
      <Heading>記事の詳細</Heading>
      <Text>{ params.id }</Text>  
    </Box>
  )
}

export default Article