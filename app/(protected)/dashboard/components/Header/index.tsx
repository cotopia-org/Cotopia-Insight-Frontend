import {
  ArrowRightLinearIcon,
  NotificationBingLinearIcon,
  RefreshCircleLinearIcon,
  SearchNormalLinearIcon,
  TimerLinearIcon,
} from '@assets'

function Header() {
  return (
    <div className="h-[61px] flex justify-between items-center bg-grayscale-surface-subtle mr-6 pl-8 pr-6 rounded-[20px]">
      <div className="flex items-center gap-4">
        <RefreshCircleLinearIcon className="w-8 h-8 text-primary-text-link" />
        <div className="text-bold18 text-grayscale-text-paragraph">
          Dashboard Redesign with elahejln
        </div>
        <div className="flex items-center gap-2 bg-primary-surface-light text-bold20 text-primary-text-link px-2 py-1 rounded-lg">
          <TimerLinearIcon className="w-5 h-5 text-primary-text-link" />
          2hr, 23m
        </div>
        <ArrowRightLinearIcon className="w-5 h-5 text-grayscale-text-paragraph" />
      </div>
      <div className="flex items-center gap-5">
        <SearchNormalLinearIcon className="w-6 h-6 text-grayscale-text-paragraph" />
        <NotificationBingLinearIcon className="w-6 h-6 text-grayscale-text-paragraph" />
      </div>
    </div>
  )
}

export default Header
