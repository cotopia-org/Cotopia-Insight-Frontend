'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useTokenStore } from '@store'
import { DASHBOARD_ROUTE } from '@routes'

function SuspenseContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('t') as string
  const { setToken } = useTokenStore()
  const router = useRouter()

  useEffect(() => {
    if (token) {
      setToken(token)
      router.push(DASHBOARD_ROUTE)
    }
  }, [])

  return <div>{token ? 'Logging in ...' : 'Your token has expired'}</div>
}

function Login() {
  return (
    <Suspense>
      <SuspenseContent />
    </Suspense>
  )
}

export default Login
