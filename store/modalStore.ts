import { create } from "zustand"

type Store = {
  isOpen: boolean,
  isNotification: boolean, // 編集中のものあるかないかフラグ
  onClose: () => void,
  onOpen: () => void,
  setIsNotification: (bool: boolean) => void
}

export const useModalStore = create<Store> (set => ({
  isOpen: false,
  isNotification: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  setIsNotification: (bool) => set({ isNotification: bool })
}))