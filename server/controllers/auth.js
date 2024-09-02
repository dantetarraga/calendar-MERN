import { User } from '../models/User.js'
import bycrypt from 'bcryptjs'

class AuthController {
  static async register (req, res) {
    const { name, lastName, email, password } = req.body

    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({
        ok: false,
        message: 'User already exists'
      })
    }

    user = new User({ name, lastName, email, password })

    const salt = bycrypt.genSaltSync()
    user.password = bycrypt.hashSync(password, salt)

    const savedUser = await user.save()

    if (!savedUser) {
      return res.status(500).json({
        ok: false,
        msg: 'Internal server error'
      })
    }

    return res.status(201).json({
      ok: true,
      message: 'User registered'
    })
  }

  static async login (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        ok: false,
        message: 'User not found'
      })
    }

    const validPassword = bycrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        message: 'Invalid password or email'
      })
    }

    return res.json({
      ok: true,
      message: 'User logged in'
    })
  }

  static async refreshToken (req, res) {
    res.json({
      ok: true,
      message: 'Refresh token'
    })
  }
}

export default AuthController
