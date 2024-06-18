import { ClockLinearIcon } from '@assets'
import TimeChipProps from './type'

function TimeChip({ data }: TimeChipProps) {
  return (
    <div className="flex gap-1 items-center px-2 py-1 bg-primary-surface-subtle rounded-lg">
      <ClockLinearIcon className="w-3.5 h-3.5 text-primary-text-link" />
      <p className="text-bold12 text-primary-text-link">{data}</p>
    </div>
  )
}

export default TimeChip
