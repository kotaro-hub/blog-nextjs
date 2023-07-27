import { create } from "zustand"

type Store = {
  isNotification: boolean, // 編集中のものあるかないかフラグ
  setIsNotification: (bool: boolean) => void
}

export const useNotificationStore = create<Store> (set => ({
  isNotification: false,
  setIsNotification: (bool) => set({ isNotification: bool })
}))