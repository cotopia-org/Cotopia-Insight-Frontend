export const DETAILED_REPORT_URL = '/detailed_report'

export enum InBetweenType {
  OFF = 'off',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

interface DetailedReportDataType {
  From: number
  'Net On Mobile Hours': number
  'Net Session Hours': number
  'Number Of On Moblies': number
  'Number Of Pausings': number
  'Number Of Rows': number
  'Number Of Sessions': number
  'Number Of Talkings': number
  'Raw Session Hours': number
  To: number
  'Total Puasing Hours': number
  'Total Talking Hours': number
  User: string
}

export interface DetailedReportType {
  in_between: DetailedReportDataType[]
  total: DetailedReportDataType
}
