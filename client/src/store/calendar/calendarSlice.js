import { createSlice } from '@reduxjs/toolkit'
import { addDays, addHours } from 'date-fns'

import { randomColor } from '../../utils'

const tempEvents = [
  {
    _id: 1,
    title: 'Reunión de equipo',
    notes: 'Discutir los avances del proyecto',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: randomColor(),
    user: {
      _id: 1,
      name: 'Juan'
    }
  },
  {
    _id: 2,
    title: 'Reunión de equipo',
    notes: 'Discutir los avances del proyecto',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: randomColor(),
    user: {
      _id: 1,
      name: 'Mario'
    }
  },
  {
    _id: 3,
    title: 'Presentación de ventas',
    notes: 'Presentar nuevo producto a cliente potencial',
    start: addHours(addDays(new Date(), 2), 2),
    end: addHours(addDays(new Date(), 2), 4),
    bgColor: randomColor(),
    user: {
      _id: 2,
      name: 'María'
    }
  }
]

const initialState = {
  events: [...tempEvents],
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
    }
  }
})

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent, onDeleteEvent
} = calendarSlice.actions
