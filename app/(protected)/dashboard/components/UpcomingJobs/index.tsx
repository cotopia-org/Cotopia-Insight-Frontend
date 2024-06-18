import {
  ArrowRightLinearIcon,
  BriefcaseBulkIcon,
  CalendarLinearIcon,
  PlayCircleBulkIcon,
} from '@assets'
import staticText from '@locale/en'

const { upcoming_jobs, all_jobs } = staticText.dashboard

function UpcomingJobs() {
  return (
    <div className="min-h-full flex flex-col justify-between px-5 py-4 border border-solid border-grayscale-border-disabled rounded-3xl">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-bold20 text-grayscale-text-subtitle">
          <BriefcaseBulkIcon className="w-8 h-8 text-primary-text-link" />
          {upcoming_jobs}
        </div>
        <div className="flex items-center gap-2 text-bold20 text-primary-text-link">
          {all_jobs}
          <ArrowRightLinearIcon className="w-6 h-6 text-primary-text-link" />
        </div>
      </div>
      <div className="flex gap-[12px] px-3 py-2 border border-solid border-grayscale-border-disabled rounded-xl">
        <PlayCircleBulkIcon className="w-8 h-8 text-primary-surface" />
        <div className="flex-1">
          <div className="text-medium18 text-grayscale-text-paragraph">
            This is another job title
          </div>
          <div className="text-regular14 text-grayscale-text-caption mt-1">
            Sometimes Your Jobs need a Description for better understanding
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-1 bg-grayscale-surface text-medium12 rounded-lg px-2 py-1">
              <CalendarLinearIcon className="w-5 h-5 text-grayscale-text-paragraph" />2 Aug, 2023 -
              2:30
            </div>
            <div className="flex items-center gap-2">
              <div className="text-medium12 text-grayscale-text-subtitle">Personal</div>
              <div className="text-medium12 text-grayscale-text-subtitle">/</div>
              <div className="text-medium12 text-grayscale-text-subtitle"># Cotopia, Personal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[12px] px-3 py-2 border border-solid border-grayscale-border-disabled rounded-xl">
        <PlayCircleBulkIcon className="w-8 h-8 text-primary-surface" />
        <div className="flex-1">
          <div className="text-medium18 text-grayscale-text-paragraph">
            This is another job title
          </div>
          <div className="text-regular14 text-grayscale-text-caption mt-1">
            Sometimes Your Jobs need a Description for better understanding
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-1 bg-grayscale-surface text-medium12 rounded-lg px-2 py-1">
              <CalendarLinearIcon className="w-5 h-5 text-grayscale-text-paragraph" />2 Aug, 2023 -
              2:30
            </div>
            <div className="flex items-center gap-2">
              <div className="text-medium12 text-grayscale-text-subtitle">Personal</div>
              <div className="text-medium12 text-grayscale-text-subtitle">/</div>
              <div className="text-medium12 text-grayscale-text-subtitle"># Cotopia, Personal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingJobs
