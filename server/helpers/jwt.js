import jwt from 'jsonwebtoken'

export const generateToken = (uui, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uui, name }
    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '2h'
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject(new Error('Could not generate token'))
      }
      resolve(token)
    })
  })
}
