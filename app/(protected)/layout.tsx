'use client'

import React from 'react'
import useApi from '@utils/api/useApi'
import { UserDto, USER_URL } from '@constants/apis/user'
import { JOB_USER_URL, JobUserDto } from '@constants/apis/jobUser'
import { JOB_MANAGER_BASE_URL } from '@utils/api/const'
import useUserStore from '../../store/user'
import { SidebarMenu } from './components'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { setProfile, setJobProfile } = useUserStore()

  useApi<UserDto>({
    url: USER_URL,
    onSuccess: data => {
      setProfile(data)
    },
  })

  useApi<JobUserDto>({
    baseURL: JOB_MANAGER_BASE_URL,
    url: JOB_USER_URL,
    onSuccess: data => {
      setJobProfile(data)
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
