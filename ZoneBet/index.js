import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:5173',
    //credentials: true,
}))

app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`)
})
