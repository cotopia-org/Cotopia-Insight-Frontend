import { useState } from 'react'
import { useUserStore } from '@store'
import { MAKEBOARD_URL, makeboardDto } from '@constants/apis/makeboard'
import staticText from '@locale/en'
import { DateTypes, getQueryParams, jalaliEpochDate, second2HourMinute } from '@utils'
import useApi from '@utils/api/useApi'
import { KSkeleton } from '@components'

const { today_total } = staticText.dashboard

function TodayTotal() {
  const { profile } = useUserStore()
  const [todayData, setTodayData] = useState<string>()

  const { loading } = useApi<makeboardDto>({
    url:
      MAKEBOARD_URL +
      getQueryParams({
        start_epoch: jalaliEpochDate(DateTypes.START_OF_TODAY),
        end_epoch: jalaliEpochDate(DateTypes.NOW),
      }),
    callCondition: !!profile?.discord_id,
    onSuccess: data => {
      const tempData = second2HourMinute(data[profile?.discord_id || ''])
      setTodayData(`${tempData.hours}hr, ${tempData.minutes}m`)
    },
  })

  return (
    <div className="flex-1 bg-primary-surface-light py-4 px-5 rounded-3xl">
      <div className="text-bold16 text-primary-text-body mb-4">{today_total}</div>
      <div className="text-medium24 text-primary-text-link">
        {loading || !todayData ? <KSkeleton height={28.63} /> : todayData}
      </div>
    </div>
  )
}

export default TodayTotal
