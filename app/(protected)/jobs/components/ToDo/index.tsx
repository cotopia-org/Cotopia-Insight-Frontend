import { PlayCircleBulkIcon } from '@assets'
import DateChip from '../DateChip'
import TimeChip from '../TimeChip'

function ToDo() {
  return (
    <div className="flex gap-3 p-3">
      <PlayCircleBulkIcon className="w-8 h-8 text-primary-surface" />
      <div className="flex-1">
        <p className="text-medium18 text-grayscale-text-paragraphs mb-1">
          This is another job title
        </p>
        <p className="text-medium14 text-grayscale-text-caption mb-2">
          Sometimes Your Jobs need a Description for better understanding
        </p>
        <div className="flex gap-3">
          <DateChip data="2 Aug, 2023 - 2:30" />
          <TimeChip data="02:23:12" />
        </div>
      </div>
      <div className="self-end flex items-center gap-2">
        <div className="text-medium12 text-grayscale-text-subtitle">Personal</div>
        <div className="text-medium12 text-grayscale-text-subtitle">/</div>
        <div className="text-medium12 text-grayscale-text-subtitle"># Cotopia, Personal</div>
      </div>
    </div>
  )
}

export default ToDo
