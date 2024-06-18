import staticText from '@locale/en'
import { second2HourMinute } from '@utils'
import { KSkeleton } from '@components'
import MonthTotalType from './type'

const { month_total } = staticText.dashboard

function MonthTotal({ data, loading }: MonthTotalType) {
  return (
    <div className="flex-1 bg-grayscale-surface py-4 px-5 rounded-3xl">
      <div className="text-bold16 text-grayscale-text-subtitle mb-4">{month_total}</div>
      <div className="text-medium24 text-grayscale-text-paragraph">
        {loading || !data ? (
          <KSkeleton height={28.63} />
        ) : (
          `${second2HourMinute(data).hours}hr, ${second2HourMinute(data).minutes}m`
        )}
      </div>
    </div>
  )
}

export default MonthTotal
