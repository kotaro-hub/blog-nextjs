import { NextResponse } from "next/server"

const postData = {
  posts: [
    {
      id: "1",
      title: "Reactの基礎",
      content: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      imgSrc: "/img1.jpg",
      tags: ["React"]
    },
    {
      id: "2",
      title: "ReactとTypeScript",
      content: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      imgSrc: "/img2.jpg",
      tags: ["React", "TypeScript"]
    },
    {
      id: "3",
      title: "Vue",
      content: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      imgSrc: "/img3.jpg",
      tags: ["Vue", "TypeScript"]
    },
    {
      id: "4",
      title: "Nuxt",
      content: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      imgSrc: "/img4.jpg",
      tags: ["Vue", "Nuxt"]
    },
    {
      id: "5",
      title: "Flutter",
      content: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      imgSrc: "/img5.jpg",
      tags: ["Flutter"]
    },
    {
      id: "6",
      title: "ReactHook",
      content: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      imgSrc: "/img6.jpg",
      tags: ["React", "TypeScript", "通信/インフラ"]
    },
    {
      id: "7",
      title: "git",
      content: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      imgSrc: "/img7.jpg",
      tags: ["React", "TypeScript", "Git"]
    }
  ],
}

export async function GET(request: Request) {

  return NextResponse.json({ postData })
}