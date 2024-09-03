import { Router } from 'express'
import { validateToken } from '../middlewares/validateToken.js'
import { eventValidator } from '../validators/index.js'
import { validatorFields } from '../middlewares/validatorFields.js'
import EventsController from '../controllers/events.js'

const eventsRouter = Router()

// Middleware to validate token
eventsRouter.use(validateToken)

// Routes
eventsRouter.get('/', [...eventValidator], validatorFields, (req, res) => {
  res.json({
    ok: true,
    msg: 'getEvents'
  })
})
eventsRouter.put('/update/:id')
eventsRouter.post(
  '/create',
  [...eventValidator],
  validatorFields,
  EventsController.createEvent
)
eventsRouter.delete('/delete/:id')

export default eventsRouter
