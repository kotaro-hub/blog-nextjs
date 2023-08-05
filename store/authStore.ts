import { create } from "zustand"

type Store = {
  user: boolean
  logIn: () => void
  logOut: () => void
}

export const useAuthStore = create<Store>(set => ({
  user: true,
  logIn: () => set({ user: true }),
  logOut: () => set({ user: false }),
}))