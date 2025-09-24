const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require('../controllers/usuarioController');

// Validaciones para crear y actualizar
const validarUsuario = [
    body('nombre').trim().notEmpty().withMessage('El nombre es requerido'),
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('activo').isBoolean().optional()
];

router.get('/listar', obtenerUsuarios); // Listar todos los usuarios
router.post('/crear', validarUsuario, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Errores de validación',
            errors: errors.array()
        });
    }
    await crearUsuario(req, res);
});
router.put('/actualizar/:id', validarUsuario, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Errores de validación',
            errors: errors.array()
        });
    }
    await actualizarUsuario(req, res);
});
router.delete('/eliminar/:id', eliminarUsuario); // Eliminar un usuario

module.exports = router;