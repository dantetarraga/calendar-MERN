import { Router } from 'express'
import AuthController from '../controllers/auth.js'

const authRouter = Router()

authRouter.post('/', AuthController.login)
authRouter.post('/register', AuthController.register)
authRouter.get('/refreshToken', AuthController.refreshToken)

export default authRouter
