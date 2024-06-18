export const EVENTS_URL = '/events'

export enum EventKindType {
  SESSION_STARTED = 'SESSION STARTED',
  SESSION_ENDED = 'SESSION ENDED',
  SESSION_PAUSED = 'SESSION PAUSED',
  SESSION_RESUMED = 'SESSION RESUMED',
  TALKING_STARTED = 'TALKING STARTED',
  TALKING_STOPPED = 'TALKING STOPPED',
}

export interface EventType {
  doer: string
  driver: string
  duration: number
  epoch: number
  id: number
  ispair: boolean
  isvalid: boolean
  kind: EventKindType
  note: {
    channel: string
    desktop_status: string
    is_on_mobile: boolean
    mobile_status: string
    raw_status: string
    renew: string
    status: string
    web_status: string
  }
  pairid: number
  ts: string
}

export type EventsDto = EventType[]
