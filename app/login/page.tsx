'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useTokenStore } from '@store'
import { DASHBOARD_ROUTE } from '@routes'

function SuspenseContent() {
  const searchParams = useSearchParams()
  const timeApiToken = searchParams.get('t') as string
  const jobsApiToken = searchParams.get('jmt') as string
  const { setTimeApiToken, setJobsApiToken } = useTokenStore()
  const router = useRouter()

  useEffect(() => {
    if (timeApiToken && jobsApiToken) {
      setTimeApiToken(timeApiToken)
      setJobsApiToken(jobsApiToken)
      router.push(DASHBOARD_ROUTE)
    }
  }, [])

  return <div>{timeApiToken && jobsApiToken ? 'Logging in ...' : 'Your token has expired'}</div>
}

function Login() {
  return (
    <Suspense>
      <SuspenseContent />
    </Suspense>
  )
}

export default Login
