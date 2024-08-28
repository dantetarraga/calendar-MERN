import { useSelector } from 'react-redux'

export const useCalendarStore = () => {
  const { events, selectedEvent } = useSelector((state) => state.calendar)

  return {
    events,
    selectedEvent
  }
}
