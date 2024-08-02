import { Calendar } from 'react-big-calendar'

import { addDays, addHours } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import { getMessagesES, localizer } from '../../helpers'
import { CalendarEvent, NavBar } from '../'

function randomDate () {
  const start = new Date()
  const end = addDays(start, 60)
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function randomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

const events = [
  {
    title: 'Reunión de equipo',
    notes: 'Discutir los avances del proyecto',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: randomColor()
  },
  {
    title: 'Reunión de equipo',
    notes: 'Discutir los avances del proyecto',
    start: randomDate(),
    end: addHours(randomDate(), 2),
    bgColor: randomColor()
  },
  {
    title: 'Almuerzo con cliente',
    notes: 'Restaurante italiano en el centro',
    start: randomDate(),
    end: addHours(randomDate(), 1.5),
    bgColor: randomColor()
  },
  {
    title: 'Entrenamiento de ventas',
    notes: 'Nuevas técnicas de cierre',
    start: randomDate(),
    end: addHours(randomDate(), 4),
    bgColor: randomColor()
  },
  {
    title: 'Revisión de código',
    notes: 'Pull request #123',
    start: randomDate(),
    end: addHours(randomDate(), 1),
    bgColor: randomColor()
  },
  {
    title: 'Lanzamiento de producto',
    notes: 'Versión 2.0',
    start: randomDate(),
    end: addHours(randomDate(), 3),
    bgColor: randomColor()
  },
  {
    title: 'Conferencia de tecnología',
    notes: 'Presentación sobre IA',
    start: randomDate(),
    end: addHours(randomDate(), 6),
    bgColor: randomColor()
  },
  {
    title: 'Entrevista de trabajo',
    notes: 'Candidato para desarrollador senior',
    start: randomDate(),
    end: addHours(randomDate(), 1),
    bgColor: randomColor()
  },
  {
    title: 'Mantenimiento del servidor',
    notes: 'Actualización de seguridad',
    start: randomDate(),
    end: addHours(randomDate(), 2),
    bgColor: randomColor()
  },
  {
    title: 'Webinar de marketing',
    notes: 'Estrategias de contenido',
    start: randomDate(),
    end: addHours(randomDate(), 1.5),
    bgColor: randomColor()
  },
  {
    title: 'Reunión de planificación',
    notes: 'Objetivos del próximo trimestre',
    start: randomDate(),
    end: addHours(randomDate(), 3),
    bgColor: randomColor()
  }
]

const CalendarPage = () => {
  // eslint-disable-next-line no-unused-vars
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: event.bgColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <div>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 110px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        componets={{
          event: CalendarEvent,
          agenda: {
            event: CalendarEvent
          }
        }}
      />
    </div>
  )
}

export default CalendarPage
