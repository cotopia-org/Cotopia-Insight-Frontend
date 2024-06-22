export const JOB_USER_URL = '/self'

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
}
