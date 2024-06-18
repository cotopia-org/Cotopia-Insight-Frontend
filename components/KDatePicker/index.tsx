'use client'

import DatePicker from 'react-multi-date-picker'
import DateObject from 'react-date-object'
import persian_fa from 'react-date-object/locales/persian_fa'
import persian from 'react-date-object/calendars/persian'
import highlightWeekends from 'react-multi-date-picker/plugins/highlight_weekends'
import KDatePickerProps from './type'
import './style.css'

function KDatePicker({
  numberOfMonth = 1,
  value,
  onChange,
  type,
  renderComponent,
  minDate,
  maxDate,
}: KDatePickerProps) {
  const handleChange = (date: DateObject | DateObject[] | null) => {
    if (date == null) return onChange(null)
    if (type === 'multiDatePicker' || type === 'rangePicker') {
      if (Array.isArray(date)) {
        date.forEach(singleDate => {
          singleDate.setMillisecond(0)
          singleDate.setSecond(0)
          singleDate.setMinute(0)
          singleDate.setHour(0)
        })
        const timeStamps = date.map(singleDate => singleDate.valueOf())
        return onChange(timeStamps)
      }
      return onChange(null)
    }
    if (!Array.isArray(date)) {
      date.setMillisecond(0)
      date.setSecond(0)
      date.setMinute(0)
      date.setHour(0)
      return onChange(date.valueOf())
    }
    return onChange(null)
  }
  return (
    <DatePicker
      render={renderComponent}
      arrow={false}
      locale={persian_fa}
      calendar={persian}
      value={value}
      onChange={handleChange}
      onOpenPickNewDate={false}
      editable={false}
      numberOfMonths={numberOfMonth}
      multiple={type === 'multiDatePicker'}
      rangeHover={type === 'rangePicker'}
      plugins={[highlightWeekends()]}
      maxDate={maxDate}
      minDate={minDate}
      range={type === 'rangePicker'}
    />
  )
}

export default KDatePicker
