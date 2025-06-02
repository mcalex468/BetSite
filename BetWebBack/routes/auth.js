const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const verifyToken = require('../middlewares/authMiddleware');
require('dotenv').config();

const router = express.Router();

// Registro
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, age, postalCode, dni, city } = req.body;

        const userExists = await pool.query(
            'SELECT * FROM users WHERE email = $1 OR dni = $2',
            [email, dni]
        );

        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'El email o DNI ya está registrado.' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users (name, email, password_hash, age, postal_code, dni, city)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             RETURNING id, name, email`,
            [name, email, passwordHash, age, postalCode, dni, city]
        );

        res.status(201).json({
            message: 'Registro exitoso',
            user: result.rows[0]
        });
    } catch (err) {
        console.error('❌ Error en /register:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = userQuery.rows[0];

        if (!user) {
            return res.status(400).json({ error: 'Email o contraseña incorrectos' });
        }

        const valid = await bcrypt.compare(password, user.password_hash);
        if (!valid) {
            return res.status(400).json({ error: 'Email o contraseña incorrectos' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        const safeUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.age,
            postalCode: user.postal_code,
            city: user.city,
            dni: user.dni
        };

        console.log('✅ Usuario logueado y enviado al frontend:', safeUser);

        res.json({ message: 'Login exitoso', token, user: safeUser });
    } catch (err) {
        console.error('❌ Error en /login:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta protegida: /me
router.get('/me', verifyToken, async (req, res) => {
    try {
        const userQuery = await pool.query(
            'SELECT id, name, email, age, city, dni FROM users WHERE id = $1',
            [req.user.id]
        );

        const user = userQuery.rows[0];

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ user });
    } catch (err) {
        console.error('❌ Error en /me:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
