import { ChartLabelTitle } from '../type'

export interface ChartLabelType {
  title: string
  chartEnum: ChartLabelTitle
  selectedChart: ChartLabelTitle
  setSelectedChart: (value: ChartLabelTitle) => void
}
