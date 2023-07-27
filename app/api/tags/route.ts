import { NextResponse } from "next/server"

const tagsData = {
  tags: [
    {
      tagTitle: "React"
    },
    {
      tagTitle: "Next"
    },
    {
      tagTitle: "Vue"
    },
    {
      tagTitle: "Nuxt"
    },
    {
      tagTitle: "Flutter"
    },
    {
      tagTitle: "通信/インフラ"
    },
    {
      tagTitle: "Git"
    },
    {
      tagTitle: "TypeScript"
    },
  ]
}

export async function GET(request: Request) {
  return NextResponse.json({ tagsData })
}