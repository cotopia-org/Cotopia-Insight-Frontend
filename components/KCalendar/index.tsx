'use client'

import { Calendar } from 'react-multi-date-picker'
import './style.css'
import KSkeleton from '@components/KSkeleton'
import KCalendarProps from './type'

function KCalendar({ data }: KCalendarProps) {
  const getBackgroundColor = (number: number, maxNumber: number) => {
    const minColor = [209, 222, 255] // Light blue color
    const maxColor = [0, 43, 153] // Dark blue color

    if (number === 0) return 'rgb(242,242,242)'

    const ratio = number / maxNumber
    const color = minColor.map((channel, index) =>
      Math.round(channel + ratio * (maxColor[index] - channel)),
    )

    return `rgb(${color.join(',')})`
  }

  if (!data) {
    return <KSkeleton width="100%" height={285} />
  }

  const getColor = (number: number, maxNumber: number) => {
    if (number === 0) return '#656B9F'
    if ((number * 100) / maxNumber < 50) return '#333652'
    return '#FDFDFD'
  }

  return (
    <Calendar
      weekStartDayIndex={1}
      highlightToday={false}
      mapDays={e => {
        return {
          style: {
            backgroundColor: getBackgroundColor(
              data.find(item => item.date === e.date.format('YYYY-MM-DD'))?.value || 0,
              Math.max(...data.map(item => item.value)),
            ),
            color: getColor(
              data.find(item => item.date === e.date.format('YYYY-MM-DD'))?.value || 0,
              Math.max(...data.map(item => item.value)),
            ),
          },
        }
      }}
    />
  )
}

export default KCalendar
