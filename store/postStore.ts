import { create } from "zustand"

type Post = {
  id: string
  title: string
  content: string
  imgSrc: string
  tags: string[]
}

type Store = {
  posts: Post[]
  selectedPost: null | Post
  setPosts: (posts: Post[]) => void
  setSelectedPost: (post: Post) => void
  updatePost: (updatedPost: Post) => void
}

export const usePostStore = create<Store>(set => ({
  posts: [],
  selectedPost: null,
  setPosts: (posts) => set({ posts }),
  setSelectedPost: (post) => set({ selectedPost: post }),
  updatePost: (updatedPost) => set(state => ({
    posts: state.posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    ),
  })),
}))