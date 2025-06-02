const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const pool = require('../db');

router.put('/profile', verifyToken, async (req, res) => {
    const userId = req.user.id;
    const { name, email, age, postalCode, city, dni } = req.body;

    try {
        // Aquí puedes validar los campos antes de hacer el UPDATE

        const query = `
            UPDATE users SET
                name = $1,
                email = $2,
                age = $3,
                postal_code = $4,
                city = $5,
                dni = $6
            WHERE id = $7
            RETURNING id, name, email, age, postal_code AS "postalCode", city, dni
        `;

        const values = [name, email, age, postalCode, city, dni, userId];

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ message: 'Perfil actualizado correctamente', user: result.rows[0] });
    } catch (error) {
        console.error('Error al actualizar perfil:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
