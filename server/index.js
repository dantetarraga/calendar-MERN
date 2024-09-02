import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import connectDB from './database/config.js'

dotenv.config()

const app = express()
connectDB()

app.use(express.static('public'))
app.use(express.json())

const PORT = process.env.PORT || 3000

// Routes
app.use('/api/auth', authRouter)

app.route('/').post((req, res) => {
  console.log(req.body)
  res.json({
    message: 'Hello World!'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
