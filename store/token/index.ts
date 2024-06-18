'use client'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface TokenStore {
  token: string
  setToken: (t: string) => void
}

const useTokenStore = create<TokenStore>()(
  persist(
    set => ({
      token: '',
      setToken: t => set({ token: t }),
    }),
    {
      name: 'tokenStore',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useTokenStore
