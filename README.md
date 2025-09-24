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
- En el footer aparece mi marca personal: **"Desarrollada por Sheynner Zavala"**.

---


## ⚙️ Endpoints disponibles

### Usuarios
- `GET /api/usuario/listar` → lista todos los usuarios.
- `POST /api/usuario/crear` → crea un nuevo usuario.
- `PUT /api/usuario/actualizar/:id` → actualiza un usuario por ID.
- `DELETE /api/usuario/eliminar/:id` → elimina un usuario por ID.

### URLs completas
- `GET http://localhost:3000/api/usuario/listar`
- `POST http://localhost:3000/api/usuario/crear`
- `PUT http://localhost:3000/api/usuario/actualizar/:id`
- `DELETE http://localhost:3000/api/usuario/eliminar/:id`

### Extra
- `GET /` → carga el frontend (`public/index.html`).

---

## 🖼️ Captura de la aplicación

![Gestión de Usuarios - Sheynner Zavala](https://github.com/user-attachments/assets/e1652a4d-9033-465a-87ec-0ea815a3cdd0)

*Interfaz de gestión de usuarios desarrollada por Sheynner Zavala*

---

## 🚀 Instalación y uso

1. **Clonar el proyecto**
   ```bash
   git clone <url-del-repositorio>
   cd mi-api
