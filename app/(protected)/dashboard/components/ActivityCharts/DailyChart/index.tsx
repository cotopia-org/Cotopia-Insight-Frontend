import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { useUserStore } from '@store'
import useApi from '@utils/api/useApi'
import { DateTypes, getQueryParams, jalaliEpochDate, second2HourMinute } from '@utils'
import { EVENTS_URL, EventKindType, EventsDto } from '@constants/apis/events'
import { KSkeleton } from '@components'
import { ArcType, DailyDataType } from './type'

function DailyChart() {
  const { profile } = useUserStore()
  const [dailyData, setDailyData] = useState<DailyDataType>()
  const [workingDuration, setWorkingDuration] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const width = 270
  const height = 270
  const outerRadius = height / 2 - 10
  const innerRadius = outerRadius * 0.8
  const tau = 2 * Math.PI
  const FULL_DAY_EPOCH = 86400

  const { loading, data: eventsData } = useApi<EventsDto>({
    url:
      EVENTS_URL +
      getQueryParams({
        start: jalaliEpochDate(DateTypes.START_OF_TODAY),
        end: jalaliEpochDate(DateTypes.NOW),
        doer: profile?.discord_id,
      }),
    callCondition: !!profile?.discord_id,
    onSuccess(data) {
      // Calculate start and end time of working time and talking time for today
      const tempData: DailyDataType = { workingTime: [], talkingTime: [] }
      let lastKind: EventKindType | null = null
      data.map((item, index) => {
        if (index === 0) {
          switch (item.kind) {
            case EventKindType.SESSION_STARTED:
              tempData.workingTime.push({ start: item.epoch })
              lastKind = item.kind
              break

            case EventKindType.TALKING_STARTED:
              tempData.talkingTime.push({ start: item.epoch })
              tempData.workingTime.push({ start: jalaliEpochDate(DateTypes.START_OF_TODAY) })
              lastKind = item.kind
              break

            default:
              tempData.workingTime.push({ start: jalaliEpochDate(DateTypes.START_OF_TODAY) })
              lastKind = EventKindType.TALKING_STARTED
              break
          }
        } else {
          switch (item.kind) {
            case EventKindType.SESSION_STARTED:
              if (
                lastKind !== EventKindType.TALKING_STARTED &&
                lastKind !== EventKindType.SESSION_STARTED &&
                lastKind !== EventKindType.SESSION_PAUSED
              ) {
                if (
                  lastKind !== EventKindType.TALKING_STOPPED &&
                  lastKind !== EventKindType.SESSION_RESUMED
                ) {
                  tempData.workingTime.push({ start: item.epoch })
                }
                lastKind = item.kind
              }
              break

            case EventKindType.SESSION_PAUSED:
              if (lastKind !== EventKindType.SESSION_PAUSED) {
                tempData.workingTime[tempData.workingTime.length - 1].end = item.epoch
                lastKind = item.kind
              }
              break

            case EventKindType.SESSION_RESUMED:
              tempData.workingTime.push({ start: item.epoch })
              lastKind = item.kind
              break

            case EventKindType.TALKING_STARTED:
              if (lastKind !== EventKindType.TALKING_STARTED) {
                tempData.talkingTime.push({ start: item.epoch })
                lastKind = item.kind
              }
              break

            case EventKindType.TALKING_STOPPED:
              tempData.talkingTime[tempData.talkingTime.length - 1].end = item.epoch
              lastKind = item.kind
              break

            case EventKindType.SESSION_ENDED:
              tempData.workingTime[tempData.workingTime.length - 1].end = item.epoch
              lastKind = item.kind
              break

            default:
              break
          }
        }
        return null
      })
      setDailyData(tempData)

      // Calculate working time for today
      const duration = tempData.workingTime.reduce(
        (total, time) =>
          time.end
            ? total + (time.end - time.start)
            : total + (jalaliEpochDate(DateTypes.NOW) - time.start),
        0,
      )
      setWorkingDuration(duration)
    },
  })

  useEffect(() => {
    // Create svg container
    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', width)
      .attr('height', height)
      .attr('transform', 'rotate(180)')

    const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`)

    // Add Total Working text inside chart
    const textAbove = g
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', '#333652')
      .attr('font-size', '16px')
      .attr('font-weight', '600')
      .attr('line-height', '19.09px')
      .text('Total Working')
      .attr('transform', 'rotate(-180)')

    textAbove.attr('x', 0).attr('y', -15)

    // Add working time for today inside chart
    const textBelow = g
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', '#333652')
      .attr('font-size', '24px')
      .attr('font-weight', '600')
      .attr('line-height', '28.64px')
      .text(
        `${second2HourMinute(workingDuration).hours}:${second2HourMinute(workingDuration).minutes}`,
      )
      .attr('transform', 'rotate(-180)')

    textBelow.attr('x', 0).attr('y', 15)

    // Create background arc for chart
    const backgroundArc = d3
      .arc<ArcType>()
      .innerRadius(innerRadius)
      .cornerRadius(5)
      .outerRadius(outerRadius)
      .startAngle(0)

    g.append('path').datum({ endAngle: tau }).style('fill', '#F2F2F2').attr('d', backgroundArc)

    // Add hour marks inside inner ring of chart
    const hours = [0, 3, 6, 9, 12, 15, 18, 21]
    const hourMarks = g
      .selectAll('.hour-mark')
      .data(hours)
      .enter()
      .append('text')
      .attr('class', 'hour-mark')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', d => (d % 6 === 0 ? '#656B9F' : '#B3B3B3'))
      .attr('font-size', d => (d % 6 === 0 ? '16px' : '12px'))
      .attr('font-weight', '600')
      .text(d => d)
      .attr('transform', 'rotate(180)')

    hourMarks
      .attr('x', d => {
        const angle = (d / 24) * Math.PI * 2
        const radius = innerRadius * 0.85
        return -Math.sin(angle) * radius
      })
      .attr('y', d => {
        const angle = (d / 24) * Math.PI * 2
        const radius = innerRadius * 0.85
        return Math.cos(angle) * radius
      })

    // Create working arc and talking arc
    const arcSection = (start: number, end: number, isTalking: boolean) => {
      const arcGenerator = d3
        .arc<ArcType>()
        .innerRadius(isTalking ? innerRadius + 3 : innerRadius)
        .cornerRadius(5)
        .outerRadius(isTalking ? outerRadius - 3 : outerRadius)
        .startAngle(start)

      const foreground = g
        .append('path')
        .datum({ endAngle: 0.127 * tau })
        .style('fill', isTalking ? '#00AD26' : '#1B5BFF')
        .attr('d', arcGenerator)

      const arcTween = (newAngle: number): d3.InterpolatorFactory<ArcType, string> => {
        return d => {
          const interpolatedEndAngle = d3.interpolate(d.endAngle, newAngle)
          return t => {
            const interpolatedValue = interpolatedEndAngle(t)
            const interpolatedData: ArcType = { ...d, endAngle: interpolatedValue }
            return arcGenerator(interpolatedData) as string
          }
        }
      }

      foreground
        .transition()
        .duration(750)
        .attrTween('d', arcTween(end) as any)
    }

    // Calculate start and end of arc based on epoch
    if (!loading) {
      dailyData?.workingTime.map(item => {
        arcSection(
          ((item.start - jalaliEpochDate(DateTypes.START_OF_TODAY)) * tau) / FULL_DAY_EPOCH,
          item.end
            ? ((item.end - jalaliEpochDate(DateTypes.START_OF_TODAY)) * tau) / FULL_DAY_EPOCH
            : ((jalaliEpochDate(DateTypes.NOW) - jalaliEpochDate(DateTypes.START_OF_TODAY)) * tau) /
                FULL_DAY_EPOCH,
          false,
        )
        return null
      })
      if (dailyData?.talkingTime) {
        dailyData?.talkingTime.map(item => {
          arcSection(
            ((item.start - jalaliEpochDate(DateTypes.START_OF_TODAY)) * tau) / FULL_DAY_EPOCH,
            item.end
              ? ((item.end - jalaliEpochDate(DateTypes.START_OF_TODAY)) * tau) / FULL_DAY_EPOCH
              : ((jalaliEpochDate(DateTypes.NOW) - jalaliEpochDate(DateTypes.START_OF_TODAY)) *
                  tau) /
                  FULL_DAY_EPOCH,
            true,
          )
          return null
        })
      }
    }

    return () => {
      svg.remove()
    }
  }, [loading])

  return (
    <div className="flex justify-center items-center h-full">
      {loading || !eventsData ? (
        <KSkeleton height={260} width={260} variant="circular" />
      ) : (
        <div ref={ref} />
      )}
    </div>
  )
}

export default DailyChart
