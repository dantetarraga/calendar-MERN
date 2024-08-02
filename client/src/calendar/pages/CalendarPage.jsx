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
  },
  {
    title: 'Taller de diseño UX',
    notes: 'Mejoras en la experiencia de usuario',
    start: randomDate(),
    end: addHours(randomDate(), 4),
    bgColor: randomColor()
  },
  {
    title: 'Día de trabajo remoto',
    notes: 'Enfoque en tareas pendientes',
    start: randomDate(),
    end: addHours(randomDate(), 8),
    bgColor: randomColor()
  },
  {
    title: 'Revisión de presupuesto',
    notes: 'Análisis de gastos Q2',
    start: randomDate(),
    end: addHours(randomDate(), 2),
    bgColor: randomColor()
  },
  {
    title: 'Sesión de brainstorming',
    notes: 'Nuevas ideas de producto',
    start: randomDate(),
    end: addHours(randomDate(), 1.5),
    bgColor: randomColor()
  },
  {
    title: 'Auditoría de seguridad',
    notes: 'Revisión trimestral',
    start: randomDate(),
    end: addHours(randomDate(), 5),
    bgColor: randomColor()
  },
  {
    title: 'Reunión de accionistas',
    notes: 'Presentación de resultados anuales',
    start: randomDate(),
    end: addHours(randomDate(), 2),
    bgColor: randomColor()
  },
  {
    title: 'Capacitación en nueva herramienta',
    notes: 'Introducción a Kubernetes',
    start: randomDate(),
    end: addHours(randomDate(), 3),
    bgColor: randomColor()
  },
  {
    title: 'Revisión de rendimiento',
    notes: 'Evaluación semestral',
    start: randomDate(),
    end: addHours(randomDate(), 1),
    bgColor: randomColor()
  },
  {
    title: 'Hackathon interno',
    notes: 'Desarrollo de proyectos innovadores',
    start: randomDate(),
    end: addHours(randomDate(), 12),
    bgColor: randomColor()
  },
  {
    title: 'Cierre de sprint',
    notes: 'Demostración de nuevas funcionalidades',
    start: randomDate(),
    end: addHours(randomDate(), 1.5),
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
          event: CalendarEvent
        }}
      />
    </div>
  )
}

export default CalendarPage
