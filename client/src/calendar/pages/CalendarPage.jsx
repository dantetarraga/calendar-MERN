import { useState } from 'react'
import { Calendar } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/calendar.css'

import { getMessagesES, localizer } from '../../helpers'
import { useCalendarStore, useUiStore } from '../../hook'
import { hexToRgb } from '../../utils'
import { CalendarEvent, CalendarModal, FabAddNew, NavBar } from '../'

const CalendarPage = () => {
  const { events, setActiveEvent } = useCalendarStore()
  const { openDateModal } = useUiStore()
  const [lastView] = useState(localStorage.getItem('lastView') || 'week')

  // eslint-disable-next-line no-unused-vars
  const eventStyleGetter = (event, start, end, isSelected) => {
    const { r, g, b } = hexToRgb(event.bgColor)

    const style = {
      border: `1.4px solid ${event.bgColor}`,
      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
      borderRadius: '8px'
    }

    return {
      style
    }
  }

  const handleDoubleClick = () => openDateModal()
  const handleSelectEvent = (event) => setActiveEvent(event)
  const handleViewChange = (event) => localStorage.setItem('lastView', event)

  return (
    <div>
      <NavBar />

      <main className='flex justify-center items-center flex-col'>
        <div className='relative'>
          <Calendar
            culture='es'
            localizer={localizer}
            defaultView={lastView}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 'calc(100vh - 110px)', width: '1000px' }}
            messages={getMessagesES()}
            eventPropGetter={eventStyleGetter}
            components={{
              event: CalendarEvent
            }}
            onDoubleClickEvent={handleDoubleClick}
            onSelectEvent={handleSelectEvent}
            onView={handleViewChange}
          />

          <FabAddNew />
        </div>

        <CalendarModal />
      </main>
    </div>
  )
}

export default CalendarPage
