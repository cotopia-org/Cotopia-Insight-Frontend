'use client'

import { MouseEventHandler, useRef, useState } from 'react'
import { KButton, KDatePicker, KDialog, KInput, KPopover, KRadio } from '@components'
import {
  CalendarLinearIcon,
  CloseLinearIcon,
  PlayCircleBoldIcon,
  ProfileAddBoldIcon,
  TagBoldIcon,
} from '@assets'
import staticText from '@locale/en'
import { ACCEPT_JOB, CREATE_JOB, JobDetailType, JobStatusType } from '@constants/apis/job'
import { SingleDateType } from '@components/KDatePicker/type'
import { dateConvertor } from '@utils'
import useApi from '@utils/api/useApi'
import { JOB_MANAGER_BASE_URL } from '@utils/api/const'
import { useUserStore } from '@store'
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

function JobDialog({ jobDialogOpen, setJobDialogOpen, onCreateJob }: JobDialogProps) {
  const datePickerRef = useRef()
  const { profile } = useUserStore()
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobStatus, setJobStatus] = useState(JobStatusType.TODO)
  const [dueDate, setDueDate] = useState<SingleDateType>(null)
  const [currentTag, setCurrentTag] = useState<string>()
  const [tagsList, setTagsList] = useState<string[]>([])
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const [anchorEl2, setAnchorEl2] = useState<Element | null>(null)

  const { fetch: fetchAcceptJob } = useApi({
    baseURL: JOB_MANAGER_BASE_URL,
    method: 'post',
    lazy: true,
    onSuccess() {
      setJobDialogOpen(false)
      setJobTitle('')
      setJobDescription('')
      setJobStatus(JobStatusType.TODO)
      setDueDate(null)
      setCurrentTag('')
      setTagsList([])
      onCreateJob()
    },
  })

  const { fetch: fetchCreateJob, loading: loadingCreateJob } = useApi<JobDetailType>({
    baseURL: JOB_MANAGER_BASE_URL,
    url: CREATE_JOB,
    method: 'post',
    lazy: true,
    payload: {
      title: jobTitle,
      workspace: profile?.discord_guild,
      description: jobDescription,
      tags: tagsList,
      weights: {},
      deadline: dateConvertor(dueDate || '', 'YYYY-MM-DDThh:mm:ss'),
    },
    onSuccess(data) {
      fetchAcceptJob({
        url: ACCEPT_JOB(data.id),
      })
    },
  })

  const handleStatusClick: MouseEventHandler<HTMLDivElement> = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleTagClick: MouseEventHandler<HTMLDivElement> = e => {
    setAnchorEl2(e.currentTarget)
  }

  const jobStatusToText = () => {
    switch (jobStatus) {
      case JobStatusType.TODO:
        return to_do

      case JobStatusType.DOING:
        return in_progress

      case JobStatusType.DONE:
        return done

      default:
        return ''
    }
  }

  const handleAddTag = (tag: string) => {
    if (tagsList.filter(item => item === tag)?.length === 0) {
      setTagsList([...tagsList, tag])
    }
    setCurrentTag('')
  }

  const handleRemoveTag = (tag: string) => {
    setTagsList([...tagsList.filter(item => item !== tag)])
  }

  const handleAddJob = () => {
    fetchCreateJob()
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
            width={124}
            text={start_job}
            rightIcon={className => <PlayCircleBoldIcon className={className} />}
            disabled={!jobTitle || !jobDescription}
            onClick={handleAddJob}
            loading={loadingCreateJob}
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
              onClick={handleStatusClick}
            >
              {jobStatusToText()}
            </div>
            <KPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
              <div className="px-4 py-3 flex flex-col gap-4">
                <KRadio
                  label={to_do}
                  checked={jobStatus === JobStatusType.TODO}
                  onClick={() => {
                    setJobStatus(JobStatusType.TODO)
                    setAnchorEl(null)
                  }}
                />
                <KRadio
                  label={in_progress}
                  checked={jobStatus === JobStatusType.DOING}
                  onClick={() => {
                    setJobStatus(JobStatusType.DOING)
                    setAnchorEl(null)
                  }}
                />
                <KRadio
                  label={done}
                  checked={jobStatus === JobStatusType.DONE}
                  onClick={() => {
                    setJobStatus(JobStatusType.DONE)
                    setAnchorEl(null)
                  }}
                />
              </div>
            </KPopover>
          </div>
          <div className="border-b border-grayscale-border-disabled py-5">
            <p className="text-medium16 text-grayscale-text-subtitle mb-2">{due_date}</p>
            <KDatePicker
              ref={datePickerRef}
              type="datePicker"
              value={dueDate}
              onChange={setDueDate}
              renderComponent={(value, openCalendar) => (
                <div
                  role="presentation"
                  className="flex items-center gap-2 w-max bg-grayscale-surface rounded-lg px-3 py-1 text-medium16 text-grayscale-text-paragraph cursor-pointer"
                  onClick={openCalendar}
                >
                  <CalendarLinearIcon className="w-5 h-5 text-grayscale-text-paragraph" />
                  {value ? dateConvertor(value, 'D MMM, YYYY') : click_to_add}
                </div>
              )}
            />
          </div>
          <div className="border-b border-grayscale-border-disabled py-5">
            <div className="flex justify-between items-center">
              <p className="text-medium16 text-grayscale-text-subtitle">{tags}</p>
              <div
                role="presentation"
                className="flex items-center gap-2 w-max px-3 py-1 text-bold16 text-primary-text-link"
                onClick={handleTagClick}
              >
                <TagBoldIcon className="w-5 h-5 text-primary-text-link" />
                {add_tags}
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-1">
              {tagsList.map(item => (
                <div className="flex items-center gap-1 bg-grayscale-surface p-1 rounded-[5px]">
                  <p className="text-medium16 text-grayscale-text-paragraph">{item}</p>
                  <CloseLinearIcon
                    className="w-4 h-4 text-error-text-link cursor-pointer"
                    onClick={() => handleRemoveTag(item)}
                  />
                </div>
              ))}
            </div>
            <KPopover anchorEl={anchorEl2} setAnchorEl={setAnchorEl2}>
              <div className="w-[318px] px-4 py-3 flex flex-col gap-2">
                <KInput
                  width={300}
                  label={tags}
                  placeholder="Search or Create Tags..."
                  value={currentTag}
                  onChange={e => setCurrentTag(e.target.value)}
                  onPressEnter={() => {
                    if (currentTag && currentTag.length !== 0) handleAddTag(currentTag)
                  }}
                  leftIcon={className => <TagBoldIcon className={className} />}
                />
                <div className="flex gap-1 flex-wrap">
                  {tagsList.map(item => (
                    <div className="flex items-center gap-1 bg-grayscale-surface p-1 rounded-[5px]">
                      <p className="text-medium12 text-grayscale-text-paragraph">{item}</p>
                      <CloseLinearIcon
                        className="w-2.5 h-2.5 text-error-text-link cursor-pointer"
                        onClick={() => handleRemoveTag(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </KPopover>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="text-medium16 text-grayscale-text-subtitle">{invited_people}</p>
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
