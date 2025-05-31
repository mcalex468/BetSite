import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import pool from '../db.js'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

router.options('*', (_, res) => {
    res.sendStatus(200)
})

// Registro
router.post('/register', async (req, res) => {
    const { name, email, age, city, dni, postalCode, password } = req.body

    if (!name || !email || !age || !city || !dni || !password) {
        return res.status(400).json({ error: 'Faltan datos requeridos' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const query = `
      INSERT INTO users (name, email, age, city, dni, postal_code, password_hash)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, email, name
    `
        const values = [name, email, age, city, dni, postalCode || null, hashedPassword]
        const { rows } = await pool.query(query, values)
        res.status(201).json({ message: 'Usuario registrado', user: rows[0] })
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ error: 'Email o DNI ya registrado' })
        }
        console.error(error)
        res.status(500).json({ error: 'Error en el servidor' })
    }
})

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Faltan email o contraseña' })
    }

    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        const user = rows[0]

        if (!user) return res.status(401).json({ error: 'Credenciales inválidas' })

        const isMatch = await bcrypt.compare(password, user.password_hash)
        if (!isMatch) return res.status(401).json({ error: 'Credenciales inválidas' })

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        )

        res.json({ message: 'Login exitoso', token })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error en el servidor' })
    }
})

export default router
