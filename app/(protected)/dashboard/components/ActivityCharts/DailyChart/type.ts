export interface ArcType {
  endAngle: number
}

export interface PeriodType {
  start: number
  end?: number
}

export interface DailyDataType {
  workingTime: PeriodType[]
  talkingTime: PeriodType[]
}
