import {
  differenceInCalendarDays as distance,
  format,
  formatDistanceToNowStrict
} from 'date-fns'

export function distanceToNow (date: number) {
  return formatDistanceToNowStrict(date, { addSuffix: true })
}

export { distance, format }
