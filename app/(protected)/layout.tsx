'use client'

import React from 'react'
import useApi from '@utils/api/useApi'
import { UserDto, USER_URL } from '@constants/apis/user'
import useUserStore from '../../store/user'
import { SidebarMenu } from './components'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { setProfile } = useUserStore()

  useApi<UserDto>({
    url: USER_URL,
    onSuccess: data => {
      setProfile(data)
    },
  })

  return (
    <div className="h-screen bg-grayscale-surface">
      <div className="h-full flex gap-6 pl-6 pt-6">
        <div className="mb-6">
          <SidebarMenu />
        </div>
        {children}
      </div>
    </div>
  )
}
