import { Event } from '../models/Events.js'

class EventsController {
  static async getEvents (req, res) {
    const events = await Event.find()

    res.json({
      ok: true,
      message: 'getEvents'
    })
  }
}

export default EventsController
