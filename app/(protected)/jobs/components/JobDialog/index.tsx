'use client'

import { MouseEventHandler, useState } from 'react'
import { KButton, KDialog, KInput, KPopover, KRadio } from '@components'
import {
  CalendarLinearIcon,
  CloseLinearIcon,
  PlayCircleBoldIcon,
  ProfileAddBoldIcon,
  TagBoldIcon,
} from '@assets'
import staticText from '@locale/en'
import JobDialogProps from './type'

const {
  my_jobs,
  new_job,
  start_job,
  title,
  description,
  status,
  to_do,
  in_progress,
  done,
  due_date,
  click_to_add,
  tags,
  add_tags,
  invited_people,
  invite_people,
} = staticText.jobs

function JobDialog({ jobDialogOpen, setJobDialogOpen }: JobDialogProps) {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleActionClick: MouseEventHandler<HTMLDivElement> = e => {
    setAnchorEl(e.currentTarget)
  }

  return (
    <KDialog open={jobDialogOpen} handleClose={() => setJobDialogOpen(false)}>
      <div className="flex justify-between items-center px-6 py-4 border-b border-grayscale-border">
        <div className="flex items-center gap-3">
          <div className="text-bold20 text-grayscale-text-subtitle">{my_jobs}</div>
          <div className="text-bold20 text-grayscale-text-subtitle">/</div>
          <div className="text-bold20 text-grayscale-text-subtitle">{new_job}</div>
        </div>
        <div className="flex items-center gap-3">
          <KButton
            text={start_job}
            rightIcon={className => <PlayCircleBoldIcon className={className} />}
            disabled={!jobTitle || !jobDescription}
            onClick={() => setJobDialogOpen(false)}
          />
          <CloseLinearIcon
            className="w-5 h-5 text-grayscale-text-subtitle cursor-pointer"
            onClick={() => setJobDialogOpen(false)}
          />
        </div>
      </div>

      <div className="flex h-full">
        <div className="w-3/5 border-r border-grayscale-border px-5 py-6">
          <KInput
            fullWidth
            className="mb-5"
            label={title}
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
          />
          <KInput
            fullWidth
            label={description}
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            rows={7}
          />
        </div>
        <div className="w-2/5 px-5 py-6">
          <div className="border-b border-grayscale-border-disabled pb-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">{status}</p>
            <div
              role="presentation"
              className="w-max bg-primary-surface-dark rounded-lg px-3 py-1 text-medium16 text-grayscale-text-negative cursor-pointer"
              onClick={handleActionClick}
            >
              {to_do}
            </div>
            <KPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
              <div className="px-4 py-3 flex flex-col gap-4">
                <KRadio label={to_do} checked />
                <KRadio label={in_progress} />
                <KRadio label={done} />
              </div>
            </KPopover>
          </div>
          <div className="flex justify-between items-center border-b border-grayscale-border-disabled py-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">{due_date}</p>
            <div className="flex items-center gap-2 w-max bg-grayscale-surface rounded-lg px-3 py-1 text-medium16 text-grayscale-text-paragraph">
              <CalendarLinearIcon className="w-5 h-5 text-grayscale-text-paragraph" />
              {click_to_add}
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-grayscale-border-disabled py-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">{tags}</p>
            <div className="flex items-center gap-2 w-max px-3 py-1 text-bold16 text-primary-text-link">
              <TagBoldIcon className="w-5 h-5 text-primary-text-link" />
              {add_tags}
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">{invited_people}</p>
            <div className="flex items-center gap-2 w-max px-3 py-1 text-bold16 text-primary-text-link">
              <ProfileAddBoldIcon className="w-5 h-5 text-primary-text-link" />
              {invite_people}
            </div>
          </div>
        </div>
      </div>
    </KDialog>
  )
}

export default JobDialog
