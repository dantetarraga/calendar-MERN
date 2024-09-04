import { createSlice } from '@reduxjs/toolkit'

import { randomColor } from '../../utils'

const initialState = {
  events: [],
  isLoadingEvents: true,
  selectedEvent: null
}

export const calendarSlice = createSlice({
  name: 'calendarSlice',
  initialState,
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.selectedEvent = payload
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload)
      state.selectedEvent = null
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map(event => {
        if (event._id === payload._id) return payload

        return event
      })
    },
    onDeleteEvent: (state) => {
      if (state.selectedEvent) {
        state.events = state.events.filter(event => event._id !== state.selectedEvent._id)
        state.selectedEvent = null
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false
      payload.forEach(event => {
        const exist = state.events.some(dbEvent => dbEvent.id === event.id)
        const { description, ...rest } = event
        if (!exist) state.events.push({ ...rest, notes: description, bgColor: randomColor() })
      })
    }
  }
})

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents
} = calendarSlice.actions
