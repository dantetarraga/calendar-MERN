import { useDispatch, useSelector } from 'react-redux'

import { onAddNewEvent, onSetActiveEvent } from '../store'

export const useCalendarStore = () => {
  const { events, selectedEvent } = useSelector((state) => state.calendar)
  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      // Update event
      // dispatch(onUpdateEvent(calendarEvent))
    } else {
      // Add new event
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date() }))
    }
  }

  return {
    events,
    selectedEvent,

    setActiveEvent,
    startSavingEvent
  }
}
