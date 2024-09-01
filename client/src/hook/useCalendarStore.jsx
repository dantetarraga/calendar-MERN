import { useDispatch, useSelector } from 'react-redux'

import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store'

export const useCalendarStore = () => {
  const { events, selectedEvent } = useSelector((state) => state.calendar)
  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    console.log(calendarEvent)
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().toISOString() }))
    }
  }

  return {
    events,
    selectedEvent,

    setActiveEvent,
    startSavingEvent
  }
}
