'use client'

import classNames from 'classnames'
import { useState } from 'react'
import { AddLinearIcon, NotificationBingLinearIcon, SearchNormalLinearIcon } from '@assets'
import { KButton, KSkeleton } from '@components'
import staticText from '@locale/en'
import { useUserStore } from '@store'
import useApi from '@utils/api/useApi'
import { JobDetailType, JobStatusType, JobsDto } from '@constants/apis/job'
import { JOB_MANAGER_BASE_URL } from '@utils/api/const'
import { Done, InProgress, JobDialog, ToDo } from './components'

const { my_jobs, in_progress, to_do, done } = staticText.jobs

function Jobs() {
  const [jobDialogOpen, setJobDialogOpen] = useState(false)
  const { jobProfile } = useUserStore()

  const { data: inProgressJobs, loading: inProgressLoading } = useApi<
    JobsDto,
    JobDetailType | null
  >({
    baseURL: JOB_MANAGER_BASE_URL,
    url: `/aj/${jobProfile?.id}/by/${JobStatusType.DOING}`,
    callCondition: !!jobProfile?.id,
    dataFormatter(res) {
      if (res.length === 0) return null
      return res[0].job
    },
  })

  const {
    data: todoJobs,
    loading: todoLoading,
    fetch: fetchTodo,
  } = useApi<JobsDto>({
    baseURL: JOB_MANAGER_BASE_URL,
    url: `/aj/${jobProfile?.id}/by/${JobStatusType.TODO}`,
    callCondition: !!jobProfile?.id,
  })

  const { data: doneJobs, loading: doneLoading } = useApi<JobsDto, JobDetailType | null>({
    baseURL: JOB_MANAGER_BASE_URL,
    url: `/aj/${jobProfile?.id}/by/${JobStatusType.DONE}`,
    callCondition: !!jobProfile?.id,
    dataFormatter(res) {
      if (res.length === 0) return null
      return res[0].job
    },
  })

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
            onClick={() => setJobDialogOpen(true)}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 overflow-scroll">
        <div>
          <p className="text-bold18 text-grayscale-text-caption mb-3">{in_progress}</p>
          {inProgressLoading || inProgressJobs === undefined ? (
            <KSkeleton height={99} />
          ) : (
            <InProgress data={inProgressJobs} />
          )}
        </div>
        <div className="relative flex-1 overflow-scroll">
          <p className="sticky top-0 text-bold18 text-grayscale-text-caption pb-3 bg-grayscale-surface-subtle">
            {to_do}
          </p>
          {todoLoading || !todoJobs ? (
            <div>
              <KSkeleton height={99} />
              <KSkeleton height={99} />
              <KSkeleton height={99} />
              <KSkeleton height={99} />
              <KSkeleton height={99} />
            </div>
          ) : (
            <>
              {todoJobs.map((item, index) => (
                <div
                  className={classNames({
                    'pb-2 mb-2 border-b border-grayscale-border-disabled':
                      index !== todoJobs.length - 1,
                  })}
                >
                  <ToDo data={item.job} />
                </div>
              ))}
            </>
          )}
        </div>
        <div>
          <p className="text-bold18 text-grayscale-text-caption mb-3">{done}</p>
          {doneLoading || doneJobs === undefined ? (
            <KSkeleton height={74} />
          ) : (
            <Done data={doneJobs} />
          )}
        </div>
      </div>
      <JobDialog
        jobDialogOpen={jobDialogOpen}
        setJobDialogOpen={setJobDialogOpen}
        onCreateJob={() => fetchTodo()}
      />
    </div>
  )
}

export default Jobs
