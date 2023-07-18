import { create } from "zustand"

type Store = {
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
}

export const useEditStore = create<Store>((set) => ({
  isEditing: false,
  setIsEditing: (isEditing) => set({ isEditing }),
}))
