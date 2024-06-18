import classNames from 'classnames'
import { ChartLabelType } from './type'

function ChartLabel({ title, chartEnum, selectedChart, setSelectedChart }: ChartLabelType) {
  return (
    <div
      role="presentation"
      className={classNames(
        'text-medium16 text-grayscale-text-disabled px-2 py-1 rounded-xl cursor-pointer',
        {
          'text-bold16 text-primary-text-body bg-primary-surface-subtle':
            selectedChart === chartEnum,
        },
      )}
      onClick={() => setSelectedChart(chartEnum)}
    >
      {title}
    </div>
  )
}

export default ChartLabel
