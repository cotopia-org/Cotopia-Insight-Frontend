'use client'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface TokenStore {
  timeApiToken: string
  setTimeApiToken: (t: string) => void
  jobsApiToken: string
  setJobsApiToken: (t: string) => void
}

const useTokenStore = create<TokenStore>()(
  persist(
    set => ({
      timeApiToken: '',
      jobsApiToken: '',
      setTimeApiToken: t => set({ timeApiToken: t }),
      setJobsApiToken: t => set({ jobsApiToken: t }),
    }),
    {
      name: 'tokenStore',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useTokenStore
