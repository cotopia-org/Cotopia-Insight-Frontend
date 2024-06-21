import { RefreshLeftSquareBulkIcon } from '@assets'
import DateChip from '../DateChip'

function Done() {
  return (
    <div className="flex gap-3 p-3">
      <div className="flex gap-2">
        <RefreshLeftSquareBulkIcon className="w-8 h-8 text-grayscale-text-paragraph" />
      </div>
      <div className="flex-1">
        <p className="text-medium18 text-grayscale-text-paragraphs mb-1">
          Dashboard redesign with @elii
        </p>
        <p className="text-medium14 text-grayscale-text-caption mb-2">
          Dive into the dynamic world of UI design with our comprehensive...
        </p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <DateChip data="2 Aug, 2023 - 2:30" />
        <div className="flex items-center gap-2">
          <div className="text-medium12 text-grayscale-text-subtitle">Personal</div>
          <div className="text-medium12 text-grayscale-text-subtitle">/</div>
          <div className="text-medium12 text-grayscale-text-subtitle"># Cotopia, Personal</div>
        </div>
      </div>
    </div>
  )
}

export default Done
