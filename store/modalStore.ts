import { create } from "zustand"

type Store = {
  isOpen: boolean,
  isNotification: boolean,
  onClose: () => void,
  onOpen: () => void,
  setNotification: (bool: boolean) => void
}

export const useModalStore = create<Store> (set => ({
  isOpen: false,
  isNotification: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  setNotification: (bool) => set({ isNotification: bool })
}))