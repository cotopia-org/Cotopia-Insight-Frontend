import { JobDetailType } from '@constants/apis/job'

export default interface TodoProps {
  data: JobDetailType
  onRemoveJob: () => void
  onCompleteJob: () => void
  onPlayJob: () => void
}
