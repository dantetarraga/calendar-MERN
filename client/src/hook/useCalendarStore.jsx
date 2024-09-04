import { useDispatch, useSelector } from 'react-redux'

import { calendarApi } from '../api'
import { convertEventsToDateEvents } from '../helpers'
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store'

export const useCalendarStore = () => {
  const { events, selectedEvent } = useSelector((state) => state.calendar)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      const { data } = await calendarApi.post('/events/create', calendarEvent)
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }))
    }
  }

  const startDeletingEvent = async () => {
    dispatch(onDeleteEvent())
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
