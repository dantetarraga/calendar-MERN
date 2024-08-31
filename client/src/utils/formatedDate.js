import { parseDateTime } from '@internationalized/date'

export const formatedDate = (date) => {
  const isoString = date.toISOString().replace('Z', '')

  const customDate = parseDateTime(isoString)
  return customDate
}

export const converToDate = (date) => {
  const customDate = new Date(
    Date.UTC(
      date.year,
      date.month - 1,
      date.day,
      date.hour,
      date.minute,
      date.second,
      date.millisecond
    )
  )

  return customDate
}
