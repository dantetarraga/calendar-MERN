import { useState } from 'react'
import { Calendar } from 'react-big-calendar'

import { useDisclosure } from '@nextui-org/react'
import { addDays, addHours } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/calendar.css'

import { getMessagesES, localizer } from '../../helpers'
import { hexToRgb } from '../../utils'
import { CalendarEvent, NavBar } from '../'
import CalendarModal from '../components/CalendarModal'

function randomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

const events = [
  {
    title: 'Reunión de equipo',
    notes: 'Discutir los avances del proyecto',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: randomColor(),
    user: {
      id: 1,
      name: 'Juan'
    }
  },
  {
    title: 'Reunión de equipo',
    notes: 'Discutir los avances del proyecto',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: randomColor(),
    user: {
      id: 1,
      name: 'Mario'
    }
  },
  {
    title: 'Presentación de ventas',
    notes: 'Presentar nuevo producto a cliente potencial',
    start: addDays(new Date(), 1),
    end: addHours(addDays(new Date()), 2),
    bgColor: randomColor(),
    user: {
      id: 2,
      name: 'María'
    }
  },
  {
    title: 'Entrenamiento de desarrollo',
    notes: 'Sesión sobre nuevas tecnologías',
    start: addDays(new Date(), 2),
    end: addHours(addDays(new Date(), 2), 3),
    bgColor: randomColor(),
    user: {
      id: 3,
      name: 'Carlos'
    }
  },
  {
    title: 'Almuerzo con el equipo',
    notes: 'Celebración de fin de proyecto',
    start: addDays(new Date(), 3),
    end: addHours(addDays(new Date()), 2),
    bgColor: randomColor(),
    user: {
      id: 4,
      name: 'Ana'
    }
  },
  {
    title: 'Revisión de código',
    notes: 'Revisar pull request #456',
    start: addDays(new Date(), 4),
    end: addHours(addDays(new Date()), 1),
    bgColor: randomColor(),
    user: {
      id: 5,
      name: 'Pedro'
    }
  },
  {
    title: 'Planificación de sprint',
    notes: 'Definir objetivos para próximo sprint',
    start: addDays(new Date(), 5),
    end: addHours(addDays(new Date()), 2),
    bgColor: randomColor(),
    user: {
      id: 1,
      name: 'Juan'
    }
  },
  {
    title: 'Entrevista de candidato',
    notes: 'Entrevista para puesto de diseñador UX',
    start: addDays(new Date(), 2),
    end: addHours(addDays(new Date(), 2), 1),
    bgColor: randomColor(),
    user: {
      id: 2,
      name: 'María'
    }
  },
  {
    title: 'Webinar de marketing',
    notes: 'Presentación de estrategia de contenidos',
    start: addDays(new Date(), 3),
    end: addHours(addDays(new Date(), 1), 1.5),
    bgColor: randomColor(),
    user: {
      id: 3,
      name: 'Carlos'
    }
  },
  {
    title: 'Mantenimiento de servidor',
    notes: 'Actualización de software y backups',
    start: addDays(new Date(), 4),
    end: addHours(addDays(new Date(), 1), 4),
    bgColor: randomColor(),
    user: {
      id: 5,
      name: 'Pedro'
    }
  },
  {
    title: 'Reunión de cierre de mes',
    notes: 'Revisión de KPIs y planificación',
    start: addDays(new Date(), 2),
    end: addHours(addDays(new Date(), 2), 2),
    bgColor: randomColor(),
    user: {
      id: 4,
      name: 'Ana'
    }
  },
  {
    title: 'Reunión de cierre de año',
    notes: 'Revisión de KPIs y planificación',
    start: addDays(new Date(), 2),
    end: addHours(addDays(new Date(), 2), 2),
    bgColor: randomColor(),
    user: {
      id: 4,
      name: 'Percy'
    }
  }
]

const CalendarPage = () => {
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

  const handleDoubleClick = (event) => {
    console.log({ doubleClick: event })
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
