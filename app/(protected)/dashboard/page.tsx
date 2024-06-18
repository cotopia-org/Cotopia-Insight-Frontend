'use client'

import { useState } from 'react'
import { useUserStore } from '@store'
import { ArrowRightLinearIcon, ChartBulkIcon } from '@assets'
import staticText from '@locale/en'
import useApi from '@utils/api/useApi'
import { MAKEBOARD_URL, makeboardDto } from '@constants/apis/makeboard'
import { DateTypes, getQueryParams, jalaliEpochDate } from '@utils'
import {
  ActivityCharts,
  Header,
  Income,
  MonthTotal,
  TodayTotal,
  Calendar,
  UpcomingJobs,
} from './components'

const { activity_overview, track_activities_from_workspace, create_reports } = staticText.dashboard

function Dashboard() {
  const { profile } = useUserStore()
  const [monthData, setMonthData] = useState<number>()

  const { loading } = useApi<makeboardDto>({
    url:
      MAKEBOARD_URL +
      getQueryParams({
        start_epoch: jalaliEpochDate(DateTypes.START_OF_THIS_MONTH),
        end_epoch: jalaliEpochDate(DateTypes.NOW),
      }),
    callCondition: !!profile?.discord_id,
    onSuccess: data => {
      setMonthData(data[profile?.discord_id || ''])
    },
  })

  return (
    <div className="flex flex-col gap-4 flex-1 h-100">
      <Header />
      <div className="flex-1 bg-grayscale-surface-subtle rounded-tl-[20px] p-6">
        <div className="text-bold24 text-grayscale-text-paragraph mb-1">{activity_overview}</div>
        <div className="text-medium16 text-grayscale-text-subtitle mb-6">
          {track_activities_from_workspace}
        </div>
        <div className="min-h-[420px] flex gap-[22px]">
          <ActivityCharts />
          <div className="min-h-full w-1/3 flex flex-col justify-between">
            <div className="flex gap-4">
              <TodayTotal />
              <MonthTotal data={monthData} loading={loading} />
            </div>
            <Income data={monthData} loading={loading} />
            <div className="flex justify-between items-center py-4 px-5 bg-primary-surface rounded-3xl cursor-pointer">
              <div className="flex items-center gap-3 text-bold24 text-grayscale-text-negative">
                <ChartBulkIcon className="w-8 h-8 text-grayscale-text-negative" />
                {create_reports}
              </div>
              <ArrowRightLinearIcon className="w-8 h-8 text-grayscale-text-negative" />
            </div>
          </div>
        </div>
        <div className="flex mt-6 gap-3">
          <div className="w-1/3">
            <Calendar />
          </div>
          <div className="w-2/3">
            <UpcomingJobs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
