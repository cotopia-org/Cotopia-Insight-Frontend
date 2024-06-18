import dayjs from 'dayjs'
import { ArrowRightLinearIcon, CalendarLinearIcon } from '@assets'
import { KCalendar } from '@components'
import {
  DETAILED_REPORT_URL,
  DetailedReportType,
  InBetweenType,
} from '@constants/apis/detailedReport'
import staticText from '@locale/en'
import { DateTypes, getQueryParams, jalaliEpochDate } from '@utils'
import useApi from '@utils/api/useApi'
import { MonthlyChartData } from './type'

const { calendar, view_more } = staticText.dashboard

function Calendar() {
  const { data } = useApi<DetailedReportType, MonthlyChartData[]>({
    url:
      DETAILED_REPORT_URL +
      getQueryParams({
        start_epoch: jalaliEpochDate(DateTypes.START_OF_THIS_MONTH),
        end_epoch: jalaliEpochDate(DateTypes.END_OF_THIS_MONTH),
        in_between: InBetweenType.DAILY,
      }),
    dataFormatter(temp) {
      return temp.in_between.map(item => ({
        value: item['Raw Session Hours'],
        date: dayjs.unix(item.From).format('YYYY-MM-DD'),
      }))
    },
  })

  return (
    <div className="px-4 py-3 border border-solid border-grayscale-border-disabled rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-bold16 text-grayscale-text-subtitle">
          <CalendarLinearIcon className="w-5 h-5 text-primary-text-body" />
          {calendar}
        </div>
        <div className="flex items-center gap-2 text-medium10 text-primary-text-body">
          {view_more}
          <ArrowRightLinearIcon className="w-3 h-3 text-primary-text-body" />
        </div>
      </div>
      <div className="flex justify-center">
        <KCalendar data={data} />
      </div>
    </div>
  )
}

export default Calendar
