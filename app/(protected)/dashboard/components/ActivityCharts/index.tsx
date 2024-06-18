'use client'

import { useState } from 'react'
import staticText from '@locale/en'
import { CalendarLinearIcon } from '@assets'
import ChartLabel from './ChartLabel'
import { ChartLabelTitle } from './type'
import DailyChart from './DailyChart'
import WeeklyChart from './WeeklyChart'
import MonthlyChart from './MonthlyChart'
import YearlyChart from './YearlyChart'

const { daily, weekly, monthly, yearly, showing_today } = staticText.dashboard

function ActivityCharts() {
  const [selectedChart, setSelectedChart] = useState<ChartLabelTitle>(ChartLabelTitle.DAILY)

  const renderChart = () => {
    switch (selectedChart) {
      case ChartLabelTitle.DAILY:
        return <DailyChart />

      case ChartLabelTitle.WEEKLY:
        return <WeeklyChart />

      case ChartLabelTitle.MONTHLY:
        return <MonthlyChart />

      case ChartLabelTitle.YEARLY:
        return <YearlyChart />

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col w-2/3 p-3 rounded-3xl border border-grayscale-border-disabled">
      <div className="flex justify-between border-b border-grayscale-border-disabled pb-3">
        <div className="flex gap-3">
          <ChartLabel
            title={daily}
            chartEnum={ChartLabelTitle.DAILY}
            selectedChart={selectedChart}
            setSelectedChart={setSelectedChart}
          />
          <ChartLabel
            title={weekly}
            chartEnum={ChartLabelTitle.WEEKLY}
            selectedChart={selectedChart}
            setSelectedChart={setSelectedChart}
          />
          <ChartLabel
            title={monthly}
            chartEnum={ChartLabelTitle.MONTHLY}
            selectedChart={selectedChart}
            setSelectedChart={setSelectedChart}
          />
          <ChartLabel
            title={yearly}
            chartEnum={ChartLabelTitle.YEARLY}
            selectedChart={selectedChart}
            setSelectedChart={setSelectedChart}
          />
        </div>
        <div className="flex items-center gap-4 pr-2">
          <div className="text-medium12 text-grayscale-text-paragraph px-3 py-2 bg-grayscale-surface-disabled rounded-[10px] cursor-pointer">
            {showing_today}
          </div>
          <CalendarLinearIcon className="w-5 h-5 text-grayscale-text-paragraph cursor-pointer" />
        </div>
      </div>
      <div className="flex-1">{renderChart()}</div>
    </div>
  )
}

export default ActivityCharts
