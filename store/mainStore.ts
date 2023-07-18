import { create } from "zustand"

type Store = {
  store: any
  setStore: any
}

export const useMainStore = create<Store>(set => ({
  store: {},
  setStore: (store: any) => set({ store })
}))