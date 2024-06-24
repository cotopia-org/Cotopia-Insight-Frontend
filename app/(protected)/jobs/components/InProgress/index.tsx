import { PauseCircleBulkIcon, TickCircleBulkIcon } from '@assets'
import { dateConvertor } from '@utils'
// import TimeChip from '../TimeChip'
import useApi from '@utils/api/useApi'
import { JOB_MANAGER_BASE_URL } from '@utils/api/const'
import { EDIT_ACCEPTED_JOB, JobStatusType } from '@constants/apis/job'
import { useUserStore } from '@store'
import DateChip from '../DateChip'
import InProgressProps from './type'

function InProgress({ data, onPauseJob, onCompleteJob }: InProgressProps) {
  const { jobProfile } = useUserStore()

  const { fetch: fetchEditAcceptedJob } = useApi({
    baseURL: JOB_MANAGER_BASE_URL,
    method: 'put',
    lazy: true,
  })

  if (data) {
    return (
      <div className="flex gap-3 p-3 border border-grayscale-border-disabled rounded-xl">
        <div className="flex gap-2">
          <PauseCircleBulkIcon
            className="w-8 h-8 text-warning-text-link"
            onClick={() =>
              fetchEditAcceptedJob({
                url: EDIT_ACCEPTED_JOB(data.id, jobProfile?.id),
                payload: {
                  acceptor_status: JobStatusType.TODO,
                },
                onSuccess: onPauseJob,
              })
            }
          />
          <TickCircleBulkIcon
            className="w-8 h-8 text-success-text-link"
            onClick={() =>
              fetchEditAcceptedJob({
                url: EDIT_ACCEPTED_JOB(data.id, jobProfile?.id),
                payload: {
                  acceptor_status: JobStatusType.DONE,
                },
                onSuccess: onCompleteJob,
              })
            }
          />
        </div>
        <div className="flex-1">
          <p className="text-medium18 text-grayscale-text-paragraphs mb-1">{data.title}</p>
          <p className="text-medium14 text-grayscale-text-caption mb-2">{data.description}</p>
          <div className="flex gap-3">
            {data.deadline ? <DateChip data={dateConvertor(data.deadline, 'D MMM, YYYY')} /> : null}
            {/* <TimeChip data="02:23:12" /> */}
          </div>
        </div>
        <div className="self-end flex items-center gap-2">
          {data.tags ? (
            <div className="text-medium12 text-grayscale-text-subtitle">
              # {data.tags.join(', ')}
            </div>
          ) : null}
        </div>
      </div>
    )
  }

  return null
}

export default InProgress
