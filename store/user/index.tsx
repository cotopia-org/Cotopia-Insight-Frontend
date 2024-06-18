'use client'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { UserDto } from '@constants/apis/user'

interface UserStore {
  profile: UserDto | null
  incomePerHour: number | null
  setProfile: (p: UserDto) => void
  setIncomePerHour: (i: number) => void
}

const useUserStore = create<UserStore>()(
  persist(
    set => ({
      profile: null,
      incomePerHour: 0,
      setProfile: p => set({ profile: p }),
      setIncomePerHour: i => set({ incomePerHour: i }),
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useUserStore
