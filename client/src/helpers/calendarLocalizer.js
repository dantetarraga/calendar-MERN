import { dateFnsLocalizer } from 'react-big-calendar'

import { format, getDay, parse, startOfWeek } from 'date-fns'
import enUs from 'date-fns/locale/en-US'
import esEs from 'date-fns/locale/es'

const locales = {
  'en-US': enUs,
  'es-Es': esEs
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
