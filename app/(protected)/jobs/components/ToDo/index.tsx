'use client'

import { MouseEventHandler, useState } from 'react'
import {
  CopyLinearIcon,
  MoreLinearIcon,
  PlayCircleBulkIcon,
  TickCircleLinearIcon,
  TrashLinearIcon,
} from '@assets'
import { KPopover } from '@components'
import staticText from '@locale/en'
import { dateConvertor } from '@utils'
import DateChip from '../DateChip'
import TimeChip from '../TimeChip'
import TodoProps from './type'

const { duplicate, mark_done, remove } = staticText.jobs

function ToDo({ data }: TodoProps) {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleActionClick: MouseEventHandler<HTMLButtonElement> = e => {
    setAnchorEl(e.currentTarget)
  }

  return (
    <div className="flex gap-3 p-3 rounded-2xl hover:bg-grayscale-surface">
      <PlayCircleBulkIcon className="w-8 h-8 text-primary-surface" />
      <div className="flex-1">
        <p className="text-medium18 text-grayscale-text-paragraphs mb-1">{data.title}</p>
        <p className="text-medium14 text-grayscale-text-caption mb-2">{data.description}</p>
        <div className="flex gap-3">
          <DateChip data="2 Aug, 2023 - 2:30" />
          <DateChip data={dateConvertor(data.created_at, 'd MMM, YYYY - h:mm')} />
          <TimeChip data="02:23:12" />
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <MoreLinearIcon
          className="w-4 h-4 text-grayscale-text-subtitle"
          onClick={handleActionClick}
        />
        <KPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
          <div className="px-4 py-3 flex flex-col gap-2">
            <div
              role="presentation"
              className="flex items-center gap-2"
              onClick={() => setAnchorEl(null)}
            >
              <CopyLinearIcon className="w-3 h-3 text-grayscale-text-subtitle" />
              <p className="text-medium12 text-grayscale-text-subtitle">{duplicate}</p>
            </div>
            <div
              role="presentation"
              className="flex items-center gap-2"
              onClick={() => setAnchorEl(null)}
            >
              <TickCircleLinearIcon className="w-3 h-3 text-grayscale-text-subtitle" />
              <p className="text-medium12 text-grayscale-text-subtitle">{mark_done}</p>
            </div>
            <div
              role="presentation"
              className="flex items-center gap-2"
              onClick={() => setAnchorEl(null)}
            >
              <TrashLinearIcon className="w-3 h-3 text-grayscale-text-subtitle" />
              <p className="text-medium12 text-grayscale-text-subtitle">{remove}</p>
            </div>
          </div>
        </KPopover>
        <div className="flex items-center gap-2">
          <div className="text-medium12 text-grayscale-text-subtitle">Personal</div>
          <div className="text-medium12 text-grayscale-text-subtitle">/</div>
          <div className="text-medium12 text-grayscale-text-subtitle"># Cotopia, Personal</div>
        </div>
      </div>
    </div>
  )
}

export default ToDo
