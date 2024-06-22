export const JOB_USER_URL = '/self'

export const enum JobStatusType {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done',
}

interface JobType {
  title: string
  workspace: string
  description: string
  tags: null
  weights: null
  deadline: null
  status: JobStatusType
  is_archived: boolean
  id: number
  creator_id: number
  created_at: string
}

export interface JobUserDto {
  email: string
  password: null
  discord_user_id: null
  first_name: null
  last_name: null
  id: number
  is_active: boolean
  role: number
  created_at: string
  updated_at: string
  submitted_jobs: JobType[]
  accepted_jobs: JobType[]
}
