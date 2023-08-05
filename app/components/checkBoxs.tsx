"use client"

import useSWR from 'swr'
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"

import type { PostTag } from "@/types/post"

const fetcher = (url: string) => fetch(url).then(r => r.json())

type Props = {
  value: PostTag[] | string[]
  onChange: (values: (string | number)[]) => void
}

const Checkboxs = (props: Props) => {
  const { value, onChange } = props
  const {data, error, isLoading} = useSWR('/api/tags', fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <CheckboxGroup
      value={value}
      onChange={onChange}
    >
      {data?.tagsData.tags.map((tag: any) => (
        <Checkbox value={tag.tagTitle} key={tag.tagTitle} p={3}>
          {tag.tagTitle}
        </Checkbox>
      ))}
    </CheckboxGroup>
  )
}

export default Checkboxs