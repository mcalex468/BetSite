const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../db')

const router = express.Router()

// REGISTRO
router.post('/register', async (req, res) => {
    const { name, email, password, age, dni, postalCode } = req.body

    if (Number(age) < 18) return res.status(400).json({ error: 'Debes ser mayor de edad.' })

    const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email])
    if (userExists.rows.length > 0) return res.status(400).json({ error: 'Ya existe ese correo.' })

    const hash = await bcrypt.hash(password, 10)
    await db.query(
        `INSERT INTO users(name, email, password, age, dni, postal_code) VALUES($1, $2, $3, $4, $5, $6)`,
        [name, email, hash, age, dni, postalCode]
    )

    res.json({ success: true, message: 'Registrado correctamente.' })
})

// LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email])

    if (user.rows.length === 0) return res.status(400).json({ error: 'Usuario no encontrado' })

    const valid = await bcrypt.compare(password, user.rows[0].password)
    if (!valid) return res.status(400).json({ error: 'Contraseña incorrecta' })

    const token = jwt.sign({ id: user.rows[0].id, email }, process.env.JWT_SECRET, { expiresIn: '2h' })

    res.json({ success: true, token, user: { name: user.rows[0].name, email } })
})

module.exports = router
