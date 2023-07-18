export type PostTag =
"React" |
"Vue" |
"Next" |
"Nuxt" |
"Flutter" |
"通信/インフラ" |
"Git" |
"TypeScript"

export type Post = {
  id: string
  title: string
  content: string
  imgSrc: string
  tags: string[]
}