import { useState } from 'react'
import { Calendar } from 'react-big-calendar'

import { useDisclosure } from '@nextui-org/react'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/calendar.css'

import { getMessagesES, localizer } from '../../helpers'
import { useCalendarStore, useUiStore } from '../../hook'
import { hexToRgb } from '../../utils'
import { CalendarEvent, NavBar } from '../'
import CalendarModal from '../components/CalendarModal'

const CalendarPage = () => {
  const { events } = useCalendarStore()
  const { openDateModal } = useUiStore()
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
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

  const handleDoubleClick = () => {
    openDateModal()
  }

  const handleSelectEvent = (event) => {
    console.log({ click: event })
  }

  const handleViewChange = (event) => localStorage.setItem('lastView', event)

  return (
    <div>
      <NavBar />

      <main className='flex justify-center items-center flex-col'>
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

        <CalendarModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} onOpenChange={onOpenChange} />
      </main>
    </div>
  )
}

export default CalendarPage
