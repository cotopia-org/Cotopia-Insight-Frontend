import DateChipProps from './type'

function DateChip({ data }: DateChipProps) {
  return (
    <p className="px-2 py-1 bg-grayscale-surface rounded-lg text-medium12 text-grayscale-text-paragraph">
      {data}
    </p>
  )
}

export default DateChip
