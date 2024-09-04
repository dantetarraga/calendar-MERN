import { useDispatch, useSelector } from 'react-redux'

import Swal from 'sweetalert2'

import { calendarApi } from '../api'
import { convertEventsToDateEvents } from '../helpers'
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent
} from '../store'

export const useCalendarStore = () => {
  const { events, selectedEvent } = useSelector((state) => state.calendar)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    const { notes, ...rest } = calendarEvent
    try {
      if (calendarEvent.id) {
        const { data } = await calendarApi.put(
          `/events/update/${calendarEvent.id}`,
          { ...rest, description: notes }
        )
        dispatch(onUpdateEvent({ ...calendarEvent, id: data.event.id, user }))
        return
      }
      const { data } = await calendarApi.post('/events/create', {
        ...rest,
        description: notes,
        user
      })
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }))
    } catch (error) {
      console.log(error)
      Swal.fire('Error al guardar', error.response.data?.message, 'error')
    }
  }

  const startDeletingEvent = async () => {
    const { id } = selectedEvent
    try {
      const { data } = await calendarApi.delete(`/events/delete/${id}`)
      if (data.ok) Swal.fire('Evento eliminado', 'El evento fue eliminado correctamente', 'success')
      dispatch(onDeleteEvent())
    } catch (error) {
      console.log(error)
      Swal.fire('Error al eliminar', error.response.data?.message, 'error')
    }
  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events')
      const events = convertEventsToDateEvents(data.events)
      dispatch(onLoadEvents(events))
    } catch (error) {
      console.log(error)
    }
  }

  return {
    events,
    selectedEvent,
    hasEventSelected: !!selectedEvent,

    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents
  }
}
