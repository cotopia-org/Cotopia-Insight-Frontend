import { JobDetailType } from '@constants/apis/job'

export default interface InProgressProps {
  data: JobDetailType | null
  onPauseJob: () => void
  onCompleteJob: () => void
}
