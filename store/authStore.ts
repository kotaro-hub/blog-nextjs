import { create } from "zustand"

type Store = {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
}

export const useAuthStore = create<Store>(set => ({
  isLoggedIn: true,
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false }),
}))