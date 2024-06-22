'use client'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { UserDto } from '@constants/apis/user'
import { JobUserDto } from '@constants/apis/jobUser'

interface UserStore {
  profile: UserDto | null
  jobProfile: JobUserDto | null
  incomePerHour: number | null
  setProfile: (p: UserDto) => void
  setJobProfile: (p: JobUserDto) => void
  setIncomePerHour: (i: number) => void
}

const useUserStore = create<UserStore>()(
  persist(
    set => ({
      profile: null,
      jobProfile: null,
      incomePerHour: 0,
      setProfile: p => set({ profile: p }),
      setJobProfile: p => set({ jobProfile: p }),
      setIncomePerHour: i => set({ incomePerHour: i }),
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useUserStore
