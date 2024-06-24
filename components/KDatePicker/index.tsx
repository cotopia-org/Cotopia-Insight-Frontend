'use client'

import { forwardRef } from 'react'
import DatePicker from 'react-multi-date-picker'
import DateObject from 'react-date-object'
import KDatePickerProps from './type'
import './style.css'

const KDatePicker = forwardRef<any, KDatePickerProps>(
  ({ numberOfMonth = 1, value, onChange, type, renderComponent, minDate, maxDate }, ref) => {
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
      <div id="datePicker">
        <DatePicker
          // @ts-expect-error ref type error
          ref={ref}
          render={renderComponent}
          arrow={false}
          value={value}
          onChange={handleChange}
          onOpenPickNewDate={false}
          editable={false}
          numberOfMonths={numberOfMonth}
          multiple={type === 'multiDatePicker'}
          rangeHover={type === 'rangePicker'}
          maxDate={maxDate}
          minDate={minDate}
          range={type === 'rangePicker'}
        />
      </div>
    )
  },
)

export default KDatePicker
