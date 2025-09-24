const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const obtenerUsuarios = async (req, res) => {
    console.log('Entrando en obtenerUsuarios');
    try {
        const usuarios = await Usuario.findAll({
            attributes: { exclude: ['password'] },
            order: [['createdAt', 'DESC']]
        });
        res.json({
            success: true,
            message: 'Usuarios Obtenidos Correctamente',
            data: usuarios,
            total: usuarios.length
        });
    } catch (error) {
        console.error('Error al obtener usuarios', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
            error: error.message
        });
    }
};
const crearUsuario = async (req, res) => {
    try {
        const { nombre, email, password, activo } = req.body;

        // Validar campos requeridos
        if (!nombre || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Todos los campos (nombre, email, password) son requeridos'
            });
        }

        // Verificar si el email ya existe
        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).json({
                success: false,
                message: 'El email ya está registrado'
            });
        }

        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear usuario
        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            password: hashedPassword,
            activo: activo || true,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        res.status(201).json({
            success: true,
            message: 'Usuario creado correctamente',
            data: { id: nuevoUsuario.id, nombre, email, activo }
        });
    } catch (error) {
        console.error('Error al crear usuario', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
            error: error.message
        });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, password, activo } = req.body;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        // Actualizar campos
        usuario.nombre = nombre || usuario.nombre;
        usuario.email = email || usuario.email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(password, salt);
        }
        usuario.activo = activo !== undefined ? activo : usuario.activo;
        usuario.updatedAt = new Date();

        await usuario.save();

        res.json({
            success: true,
            message: 'Usuario actualizado correctamente',
            data: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, activo: usuario.activo }
        });
    } catch (error) {
        console.error('Error al actualizar usuario', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
            error: error.message
        });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        await usuario.destroy();

        res.json({
            success: true,
            message: 'Usuario eliminado correctamente',
            data: { id }
        });
    } catch (error) {
        console.error('Error al eliminar usuario', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
            error: error.message
        });
    }
};

module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};