import create from "zustand"

type Store = {
  url: string
  isEditing: boolean
  setUrl: (url: string) => void
  setIsEditing: (isEditing: boolean) => void
}

export const useEditStore = create<Store>((set) => ({
  url: "",
  isEditing: false,
  setUrl: (url) => set({ url }),
  setIsEditing: (isEditing) => set({ isEditing }),
}))
