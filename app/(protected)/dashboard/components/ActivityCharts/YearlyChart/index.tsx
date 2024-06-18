import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import dayjs from 'dayjs'
import { DateTypes, getQueryParams, jalaliEpochDate } from '@utils'
import useApi from '@utils/api/useApi'
import {
  DETAILED_REPORT_URL,
  DetailedReportType,
  InBetweenType,
} from '@constants/apis/detailedReport'
import { KSkeleton } from '@components'
import { YearlyChartData } from './type'

function YearlyChart() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [data, setData] = useState<YearlyChartData[]>()
  const [width, setWidth] = useState(0)
  const height = 250
  const barWidth = 24

  const { loading } = useApi<DetailedReportType>({
    url:
      DETAILED_REPORT_URL +
      getQueryParams({
        start_epoch: jalaliEpochDate(DateTypes.START_OF_THIS_YEAR),
        end_epoch: jalaliEpochDate(DateTypes.END_OF_THIS_YEAR),
        in_between: InBetweenType.MONTHLY,
      }),
    onSuccess(data) {
      setData(
        data.in_between.map(item => ({
          workingHours: Number((item['Raw Session Hours'] / 3600).toFixed(2)),
          month: dayjs.unix(item.From).calendar('jalali').format('MMM'),
        })),
      )
    },
  })

  useEffect(() => {
    if (svgRef.current) {
      setWidth(svgRef.current.clientWidth)
    }
  }, [])

  useEffect(() => {
    if (width === 0 || !data) return

    const container = d3.select(svgRef.current)

    const xScale = d3
      .scaleBand()
      // @ts-expect-error fix
      .domain(data.map((d, i) => i))
      .range([12, width - 12])

    const yScale = d3
      .scaleLinear()
      // @ts-expect-error fix
      .domain([0, d3.max(data, d => Math.max(d.workingHours))])
      .range([height, 0])

    // Add y axis
    const yAxis = container
      .append('g')
      .call(
        d3
          .axisLeft(yScale)
          .ticks(6)
          .tickFormat(d => `${d}h`),
      ) // Add 'h' in front of each tick value
      .style('color', '#B3B3B3') // Change color of ticks and labels
      .attr('font-size', '12px')
      .attr('font-weight', '500')
      .attr('line-height', '14.32px')
      .call(g => g.select('.domain').remove()) // Remove the axis line
      .call(g => g.selectAll('.tick line').remove()) // Remove the tick lines
      .call(g => g.selectAll('.tick text').attr('x', 12).attr('dy', -4)) // Adjust tick text position

    // Add dashed lines for y axis ticks
    yAxis
      .selectAll('.tick')
      .append('line')
      .attr('class', 'dash-line')
      .attr('x1', 12)
      .attr('x2', width)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('stroke', '#B3B3B369')
      .attr('stroke-dasharray', '4')
      .attr('z-index', 0)

    // Add bars
    const bars = container.selectAll('.bar').data(data).enter().append('g').attr('class', 'bar')

    bars
      .append('rect')
      .attr(
        'x',
        (d, i) =>
          // @ts-expect-error fix
          xScale(i) + (i / (data.length - 1)) * (xScale.bandwidth() - barWidth * 2) + 12,
      )
      .attr('y', height)
      .attr('width', barWidth)
      .attr('height', 0)
      .attr('fill', '#1B5BFF')
      .attr('rx', 2)
      .attr('ry', 2)
      .transition()
      .duration(1000)
      .attr('y', d => yScale(d.workingHours))
      .attr('height', d => height - yScale(d.workingHours))

    // Add xAxis data
    bars
      .append('text')
      .attr(
        'x',
        (d, i) =>
          // @ts-expect-error fix
          xScale(i) +
          (i / (data.length - 1)) * (xScale.bandwidth() - barWidth * 2) +
          barWidth / 2 +
          12,
      )
      .attr('fill', '#B3B3B3')
      .attr('font-size', '12px')
      .attr('font-weight', '500')
      .attr('line-height', '14.32px')
      .attr('y', height + 20) // Adjusted y position
      .attr('text-anchor', 'middle')
      .text(d => d.month)
  }, [data, height, width])

  return (
    <div className="h-full flex justify-center items-center p-2">
      {loading ? (
        <KSkeleton height="100%" width="100%" />
      ) : (
        <svg
          ref={svgRef}
          width="100%"
          height={height}
          style={{
            overflow: 'visible',
          }}
        />
      )}
    </div>
  )
}

export default YearlyChart
