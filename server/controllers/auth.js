class AuthController {
  static async register (req, res) {
    const { name, lastName, email, password } = req.body

    return res.json({
      ok: true,
      message: 'User registered'
    })
  }

  static async login (req, res) {
    const { email, password } = req.body

    res.json({
      ok: true,
      message: 'Login'
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
