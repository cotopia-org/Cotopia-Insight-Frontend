import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import duration from 'dayjs/plugin/duration'

dayjs.extend(jalaliday)
dayjs.extend(duration)

export enum DateTypes {
  NOW = 'NOW',
  START_OF_TODAY = 'START_OF_TODAY',
  START_OF_THIS_WEEK = 'START_OF_THIS_WEEK',
  END_OF_THIS_WEEK = 'END_OF_THIS_WEEK',
  START_OF_THIS_MONTH = 'START_OF_THIS_MONTH',
  END_OF_THIS_MONTH = 'END_OF_THIS_MONTH',
  START_OF_THIS_YEAR = 'START_OF_THIS_YEAR',
  END_OF_THIS_YEAR = 'END_OF_THIS_YEAR',
}

export const getQueryParams = (queryParams?: { [key: string | number]: any }): string => {
  if (queryParams) {
    let params = '?'
    const keys = Object.keys(queryParams)
    keys.forEach((key, index) => {
      if (queryParams[key] != null) {
        params += `${key}=${queryParams[key]}`
        if (keys.length - 1 !== index) params += '&'
      }
    })
    return params
  }
  return ''
}

export const dateConvertor = (
  date: number | string,
  formatType: string = 'HH:mm - YYYY/MM/DD',
): string => {
  return dayjs(date).format(formatType)
}

export const second2HourMinute = (seconds: number) => {
  return {
    hours: Math.floor(dayjs.duration(seconds * 1000).asHours()),
    minutes:
      dayjs.duration(seconds * 1000).minutes() >= 10
        ? dayjs.duration(seconds * 1000).minutes()
        : `0${dayjs.duration(seconds * 1000).minutes()}`,
  }
}

export const jalaliEpochDate = (type: DateTypes) => {
  switch (type) {
    case DateTypes.NOW:
      return dayjs().calendar('jalali').unix()

    case DateTypes.START_OF_TODAY:
      return dayjs().calendar('jalali').startOf('day').unix()

    case DateTypes.START_OF_THIS_WEEK:
      return dayjs().calendar('jalali').startOf('week').unix()

    case DateTypes.END_OF_THIS_WEEK:
      return dayjs().calendar('jalali').endOf('week').unix()

    case DateTypes.START_OF_THIS_MONTH:
      return dayjs().calendar('jalali').startOf('month').unix()

    case DateTypes.END_OF_THIS_MONTH:
      return dayjs().calendar('jalali').endOf('month').unix()

    case DateTypes.START_OF_THIS_YEAR:
      return dayjs().calendar('jalali').startOf('year').unix()

    case DateTypes.END_OF_THIS_YEAR:
      return dayjs().calendar('jalali').endOf('year').unix()

    default:
      return dayjs().calendar('jalali').unix()
  }
}
