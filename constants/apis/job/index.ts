import { JobUserDto } from '../jobUser'

export const enum JobStatusType {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done',
}

export const JOB_DOING_URL = (id: number) => `/aj/${id}/by/${JobStatusType.DOING}`
export const JOB_TODO_URL = (id: number) => `/aj/${id}/by/${JobStatusType.TODO}`
export const JOB_DONE_URL = (id: number) => `/aj/${id}/by/${JobStatusType.DONE}`
export const CREATE_JOB = '/jobs'
export const ACCEPT_JOB = (jobId: number) => `/jobs/accept/${jobId}`
export const REMOVE_JOB = (jobId: number) => `/jobs/${jobId}`
export const EDIT_ACCEPTED_JOB = (jobId: number, userId?: number) => `/jobs/${jobId}/${userId}`

export interface JobDetailType {
  title: string
  workspace: string
  description: string
  tags: string[] | null
  weights: null
  deadline: string | null
  status: JobStatusType
  is_archived: boolean
  id: number
  creator_id: number
  created_at: string
}
export interface JobType {
  user_id: number
  job_id: number
  acceptor_status: JobStatusType
  job: JobDetailType
  user: Omit<JobUserDto, 'created_at' | 'updated_at'>
}

export type JobsDto = JobType[]
