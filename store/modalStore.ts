import { create } from "zustand"

type Store = {
  isOpen: boolean,
  onClose: () => void,
  onOpen: () => void
}

export const useModalStore = create<Store> (set => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}))