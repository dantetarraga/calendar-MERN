import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import { addHours, format, getDay, parse, startOfWeek } from 'date-fns'
import enUs from 'date-fns/locale/en-US'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import { NavBar } from '../'

const locales = {
  'en-US': enUs
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const myEventsList = [{
  title: 'All Day Event very long title',
  notes: 'this is a note',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa'
}]

const CalendarPage = () => {
  return (
    <div>
      <NavBar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 90px)' }}
      />
    </div>
  )
}

export default CalendarPage
