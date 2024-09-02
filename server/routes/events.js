import { Router } from 'express'
import { validateToken } from '../middlewares/validateToken.js'

const eventsRouter = Router()

// Middleware to validate token
eventsRouter.use(validateToken)

// Routes
eventsRouter.get('/')
eventsRouter.put('/update/:id')
eventsRouter.post('/create')
eventsRouter.delete('/delete/:id')

export default eventsRouter
