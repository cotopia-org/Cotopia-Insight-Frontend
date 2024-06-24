import { RefreshLeftSquareBulkIcon } from '@assets'
import { dateConvertor } from '@utils'
import useApi from '@utils/api/useApi'
import { JOB_MANAGER_BASE_URL } from '@utils/api/const'
import { EDIT_ACCEPTED_JOB, JobStatusType } from '@constants/apis/job'
import { useUserStore } from '@store'
import DateChip from '../DateChip'
import DoneProps from './type'

function Done({ data, onRestoreJob }: DoneProps) {
  const { jobProfile } = useUserStore()

  const { fetch: fetchEditAcceptedJob } = useApi({
    baseURL: JOB_MANAGER_BASE_URL,
    method: 'put',
    lazy: true,
  })

  if (data) {
    return (
      <div className="flex gap-3 p-3">
        <div className="flex gap-2">
          <RefreshLeftSquareBulkIcon
            className="w-8 h-8 text-grayscale-text-paragraph"
            onClick={() =>
              fetchEditAcceptedJob({
                url: EDIT_ACCEPTED_JOB(data.id, jobProfile?.id),
                payload: {
                  acceptor_status: JobStatusType.TODO,
                },
                onSuccess: onRestoreJob,
              })
            }
          />
        </div>
        <div className="flex-1">
          <p className="text-medium18 text-grayscale-text-paragraphs mb-1">{data.title}</p>
          <p className="text-medium14 text-grayscale-text-caption mb-2">{data.description}</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          {data.deadline ? <DateChip data={dateConvertor(data.deadline, 'D MMM, YYYY')} /> : null}
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

export default Done
