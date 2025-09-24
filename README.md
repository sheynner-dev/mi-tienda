# Gestión de Usuarios - Fullstack (API + Frontend)

Hola 👋, soy **Sheynner Zavala** y este es mi proyecto de **gestión de usuarios**.  
Lo desarrollé combinando un **backend en Node.js + Express** con un **frontend en React (UMD + Tailwind)** que se sirve desde el mismo servidor.

---

## 🛠️ ¿Qué hace este proyecto?

- Permite **crear, listar, editar y eliminar usuarios** desde una interfaz web.
- El backend está en **Node.js/Express** conectado a una base de datos (mi_tienda).
- El frontend está hecho con **React** cargado desde un archivo estático `public/index.html`.
- La interfaz es **responsiva, moderna y tecnológica**, con tablas, tarjetas y formularios intuitivos.
- Todas las operaciones de CRUD muestran **fecha y hora exacta** al crear o actualizar un usuario.
- En el footer aparece mi marca personal: **“Desarrollada por Sheynner Zavala”**.

---

## 📂 Estructura de carpetas

---

## ⚙️ Endpoints disponibles

### Usuarios
- `GET /api/usuario/listar` → lista todos los usuarios.
- `POST /api/usuario/crear` → crea un nuevo usuario.
- `PUT /api/usuario/actualizar/:id` → actualiza un usuario por ID.
- `DELETE /api/usuario/eliminar/:id` → elimina un usuario por ID.

### Extra
- `/` → carga el frontend (`public/index.html`).
- `/cabecerabd` → prueba la conexión a la base de datos.
