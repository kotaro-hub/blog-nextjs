import { create } from "zustand"

import { Post } from "@/types/post"
import { PostForm } from "@/app/post/page"

type Store = {
  isEditing: boolean
  initialFormState: PostForm | null
  setIsEditing: (isEditing: boolean) => void
  setInitialFormState: (formState: PostForm) => void
}

export const useEditStore = create<Store>((set) => ({
  isEditing: false,
  initialFormState: null,
  setIsEditing: (isEditing) => set({ isEditing }),
  setInitialFormState: (formState) => set({ initialFormState: formState })
}))
