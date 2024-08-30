import { parseDateTime } from '@internationalized/date'

export const formatedDate = (date) => {
  const isoString = date.toISOString().replace('Z', '')

  const customDate = parseDateTime(isoString)
  return customDate
}
