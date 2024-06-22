import { RefreshLeftSquareBulkIcon } from '@assets'
import { dateConvertor } from '@utils'
import DateChip from '../DateChip'
import DoneProps from './type'

function Done({ data }: DoneProps) {
  if (data) {
    return (
      <div className="flex gap-3 p-3">
        <div className="flex gap-2">
          <RefreshLeftSquareBulkIcon className="w-8 h-8 text-grayscale-text-paragraph" />
        </div>
        <div className="flex-1">
          <p className="text-medium18 text-grayscale-text-paragraphs mb-1">{data.title}</p>
          <p className="text-medium14 text-grayscale-text-caption mb-2">{data.description}</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <DateChip data={dateConvertor(data.created_at, 'd MMM, YYYY - h:mm')} />
          <div className="flex items-center gap-2">
            <div className="text-medium12 text-grayscale-text-subtitle">Personal</div>
            <div className="text-medium12 text-grayscale-text-subtitle">/</div>
            <div className="text-medium12 text-grayscale-text-subtitle"># Cotopia, Personal</div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Done
