"use client"

import useSWR from 'swr'

import { Box, Heading, Text } from "@chakra-ui/react"
import { useEffect } from 'react'
import { Image } from '@chakra-ui/next-js'

const fetcher = (url: string) => fetch(url).then(r => r.json())

const Article = ({ params }: { params: { id: string }}) => {
  const {data, error, isLoading} = useSWR(`/api/posts/${params.id}`, fetcher)

  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  
  const { id, title, content, imgSrc, tags } = data.post

  return (
    <Box>
      <Heading>{title}</Heading>

      <Text>{ id }</Text>  
      <Text>{ content }</Text>  
      <Text>{ tags }</Text>
      <Text>{ id }</Text>  
    </Box>
  )
}

export default Article