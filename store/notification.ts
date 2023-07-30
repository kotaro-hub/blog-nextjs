import { create } from "zustand"

type EditedPost = {
  title: string,
  contents: string,
  tag: string []
}

type Store = {
  isNotification: boolean, // 編集中のものあるかないかフラグ
  editedPost: EditedPost | null,
  setIsNotification: (bool: boolean) => void,
  setEditedPost: (post: EditedPost) => void
}

export const useNotificationStore = create<Store> (set => ({
  isNotification: false,
  editedPost: null,
  setIsNotification: (bool) => set({ isNotification: bool }),
  setEditedPost: (post) => set({ editedPost: post })
}))