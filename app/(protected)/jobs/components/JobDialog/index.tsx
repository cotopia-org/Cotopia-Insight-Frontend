'use client'

import { useState } from 'react'
import { KButton, KDialog, KInput } from '@components'
import {
  CalendarLinearIcon,
  CloseLinearIcon,
  PlayCircleBoldIcon,
  ProfileAddBoldIcon,
  TagBoldIcon,
} from '@assets'
import JobDialogProps from './type'

function JobDialog({ jobDialogOpen, setJobDialogOpen }: JobDialogProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <KDialog open={jobDialogOpen} handleClose={() => setJobDialogOpen(false)}>
      <div className="flex justify-between items-center px-6 py-4 border-b border-grayscale-border">
        <div className="flex items-center gap-3">
          <div className="text-bold20 text-grayscale-text-subtitle">My Job</div>
          <div className="text-bold20 text-grayscale-text-subtitle">/</div>
          <div className="text-bold20 text-grayscale-text-subtitle">New Job</div>
        </div>
        <div className="flex items-center gap-3">
          <KButton
            text="Start the Job"
            rightIcon={className => <PlayCircleBoldIcon className={className} />}
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
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <KInput
            fullWidth
            label="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={7}
          />
        </div>
        <div className="w-2/5 px-5 py-6">
          <div className="border-b border-grayscale-border-disabled pb-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">Status</p>
            <div className="w-max bg-primary-surface-dark rounded-lg px-3 py-1 text-medium16 text-grayscale-text-negative">
              To Do
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-grayscale-border-disabled py-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">Due Date</p>
            <div className="flex items-center gap-2 w-max bg-grayscale-surface rounded-lg px-3 py-1 text-medium16 text-grayscale-text-paragraph">
              <CalendarLinearIcon className="w-5 h-5 text-grayscale-text-paragraph" />
              Click to add
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-grayscale-border-disabled py-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">Tags</p>
            <div className="flex items-center gap-2 w-max px-3 py-1 text-bold16 text-primary-text-link">
              <TagBoldIcon className="w-5 h-5 text-primary-text-link" />
              Add Tags
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">Invited People</p>
            <div className="flex items-center gap-2 w-max px-3 py-1 text-bold16 text-primary-text-link">
              <ProfileAddBoldIcon className="w-5 h-5 text-primary-text-link" />
              Invite people
            </div>
          </div>
        </div>
      </div>
    </KDialog>
  )
}

export default JobDialog
