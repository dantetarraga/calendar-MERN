import { Calendar } from 'react-big-calendar'

import { addHours } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import { localizer } from '../../helpers'
import { NavBar } from '../'

const events = [{
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
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 110px)' }}
      />
    </div>
  )
}

export default CalendarPage
