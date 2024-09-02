import { Router } from 'express'
import AuthController from '../controllers/auth.js'
import { validatorFields } from '../middlewares/validatorFields.js'
import { emailValidator, fullNameValidator, passwordValidator } from '../validators/index.js'

const authRouter = Router()

authRouter.post(
  '/',
  [...emailValidator, ...passwordValidator],
  validatorFields,
  AuthController.login
)

authRouter.post(
  '/register',
  [...fullNameValidator, ...emailValidator, ...passwordValidator],
  validatorFields,
  AuthController.register
)

authRouter.get('/refreshToken', AuthController.refreshToken)

export default authRouter
