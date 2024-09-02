import { Event } from '../models/Events.js'

class EventsController {
  static async getEvents (req, res) {
    const events = await Event.find()

    res.status(200).json({
      ok: true,
      message: 'Events fetched successfully',
      events
    })
  }

  static async createEvent (req, res) {
    const { title, start, end, description } = req.body
    const user = req.user._id

    const eventData = { title, start, end, user }

    if (description !== undefined) eventData.description = description

    const event = new Event(eventData)
    await event.save()

    res.status(201).json({
      ok: true,
      message: 'Event created successfully',
      event
    })
  }
}

export default EventsController
