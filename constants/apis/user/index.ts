export const USER_URL = '/me'

export interface UserDto {
  active: boolean
  calendar_system: string
  created_at: string
  discord_avatar: string
  discord_guild: string
  discord_id: string
  discord_name: string
  email: string | null
  has_calendar: boolean
  has_google_token: boolean
  id: number
  timezone: string
  trc20_addr: string | null
}
