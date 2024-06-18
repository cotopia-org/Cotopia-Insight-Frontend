'use client'

import classNames from 'classnames'
import { AddLinearIcon, NotificationBingLinearIcon, SearchNormalLinearIcon } from '@assets'
import { KButton } from '@components'
import staticText from '@locale/en'
import { InProgress, ToDo } from './components'

const { my_jobs, in_progress, to_do } = staticText.jobs

const data = [1, 2, 3, 4, 5, 6, 7, 8]

function Jobs() {
  return (
    <div className="flex flex-col w-full px-5 pt-3 mr-6 mb-6 bg-grayscale-surface-subtle rounded-[20px]">
      <div className="flex justify-between items-center pt-1 px-1 mb-4">
        <h1 className="text-medium24 text-grayscale-text-title">{my_jobs}</h1>
        <div className="flex items-center gap-4">
          <SearchNormalLinearIcon className="w-6 h-6 text-grayscale-text-subtitle" />
          <NotificationBingLinearIcon className="w-6 h-6 text-grayscale-text-subtitle" />
          <KButton
            text="Add a Job"
            variant="outlined"
            width={102}
            rightIcon={className => <AddLinearIcon className={className} />}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 overflow-scroll">
        <div>
          <p className="text-bold18 text-grayscale-text-caption mb-3">{in_progress}</p>
          <InProgress />
        </div>
        <div className="relative flex-1 overflow-scroll">
          <p className="sticky top-0 text-bold18 text-grayscale-text-caption pb-3 bg-grayscale-surface-subtle">
            {to_do}
          </p>
          {data.map((item, index) => (
            <div
              className={classNames({
                'pb-2 mb-2 border-b border-grayscale-border-disabled': index !== data.length - 1,
              })}
            >
              <ToDo />
            </div>
          ))}
        </div>
        {/* <div>
          <p className="text-bold18 text-grayscale-text-caption mb-3">{in_progress}</p>
          <InProgress />
        </div> */}
      </div>
    </div>
  )
}

export default Jobs
