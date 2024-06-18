'use client'

import Image from 'next/image'
import {
  CategoryBoldIcon,
  CategoryLinearIcon,
  ChartBoldIcon,
  ChartLinearIcon,
  DocumentBoldIcon,
  DocumentCopyBoldIcon,
  DocumentCopyLinearIcon,
  DocumentLinearIcon,
  LogoutLinearIcon,
  PeopleBoldIcon,
  PeopleLinearIcon,
  Setting2BoldIcon,
  Setting2LinearIcon,
  TimeTrackerBoldIcon,
  TimeTrackerLinearIcon,
} from '@assets'
import staticText from '@locale/en'
import {
  CONTRACTS_ROUTE,
  DASHBOARD_ROUTE,
  JOBS_ROUTE,
  REPORTS_ROUTE,
  SETTING_ROUTE,
  TIME_TRACKER_ROUTE,
  WORKSPACE_ROUTE,
} from '@routes'
import { KSkeleton } from '@components'
import { useUserStore } from '@store'
import MenuItem from './MenuItem'

const { dashboard, workspace, jobs, timeTracker, reports, contracts, setting, logout } =
  staticText.menu

function SidebarMenu() {
  const { profile } = useUserStore()

  return (
    <div className="h-full w-[219px] flex flex-col justify-between bg-grayscale-surface-subtle rounded-[20px] py-5 px-4">
      <div>
        <Image
          src="/images/insightsLogo.png"
          className="mb-8 m-auto"
          width={135}
          height={35}
          alt="Insights Logo"
        />
        <MenuItem
          title={dashboard}
          path={DASHBOARD_ROUTE}
          linearIcon={<CategoryLinearIcon className="w-5 h-5 text-grayscale-text-disabled" />}
          boldIcon={<CategoryBoldIcon className="w-5 h-5 text-primary-text-link" />}
        />
        <MenuItem
          title={workspace}
          path={WORKSPACE_ROUTE}
          linearIcon={<PeopleLinearIcon className="w-5 h-5 text-grayscale-text-disabled" />}
          boldIcon={<PeopleBoldIcon className="w-5 h-5 text-primary-text-link" />}
        />
        <hr className="border-grayscale-border-disabled my-6" />
        <MenuItem
          title={jobs}
          path={JOBS_ROUTE}
          linearIcon={<DocumentCopyLinearIcon className="w-5 h-5 text-grayscale-text-disabled" />}
          boldIcon={<DocumentCopyBoldIcon className="w-5 h-5 text-primary-text-link" />}
        />
        <MenuItem
          title={timeTracker}
          path={TIME_TRACKER_ROUTE}
          linearIcon={<TimeTrackerLinearIcon className="w-5 h-5 text-grayscale-text-disabled" />}
          boldIcon={<TimeTrackerBoldIcon className="w-5 h-5 text-primary-text-link" />}
        />
        <MenuItem
          title={reports}
          path={REPORTS_ROUTE}
          linearIcon={<ChartLinearIcon className="w-5 h-5 text-grayscale-text-disabled" />}
          boldIcon={<ChartBoldIcon className="w-5 h-5 text-primary-text-link" />}
        />
        <MenuItem
          title={contracts}
          path={CONTRACTS_ROUTE}
          linearIcon={<DocumentLinearIcon className="w-5 h-5 text-grayscale-text-disabled" />}
          boldIcon={<DocumentBoldIcon className="w-5 h-5 text-primary-text-link" />}
        />
        <hr className="border-grayscale-border-disabled my-6" />
        <MenuItem
          title={setting}
          path={SETTING_ROUTE}
          linearIcon={<Setting2LinearIcon className="w-5 h-5 text-grayscale-text-disabled" />}
          boldIcon={<Setting2BoldIcon className="w-5 h-5 text-primary-text-link" />}
        />
      </div>
      <div>
        <div className="flex gap-3 items-center py-2.5 mb-2">
          {profile ? (
            <Image src={profile.discord_avatar} width={40} height={40} alt="avatar" />
          ) : (
            <KSkeleton width={40} height={40} variant="circular" />
          )}
          <div className="flex flex-1 flex-col gap-1 justify-between">
            <div className="text-medium14 text-grayscale-text-title">
              {profile ? profile?.discord_name : <KSkeleton height={16.7} />}
            </div>
            {/* <div className="text-medium12 text-grayscale-text-caption">Software engineer</div> */}
          </div>
        </div>
        <div className="flex items-center gap-3 p-2.5 text-medium14 text-grayscale-text-title">
          <LogoutLinearIcon className="w-5 h-5 text-grayscale-text-title" />
          {logout}
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu
