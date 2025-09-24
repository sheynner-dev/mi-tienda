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

🖼️ Capturas de la aplicación
Vista principal - Lista de usuarios
https://github.com/user-attachments/assets/e1652a4d-9033-465a-87ec-0ea815a3cdd0

Formulario de creación de usuario
https://github.com/user-attachments/assets/3344d016-8b7e-4e47-84c4-5b7a3af5c8c8

Formulario de edición de usuario
https://github.com/user-attachments/assets/04273b3f-df56-4d3c-9c68-7db1e868bb8c

Modal de confirmación para eliminar
https://github.com/user-attachments/assets/8f0dffee-db49-46fb-b196-77c802a9a281

Vista responsive en móvil
https://github.com/user-attachments/assets/6cc19046-22ee-4101-a097-734609d32776

Interfaz de gestión de usuarios desarrollada por Sheynner Zavala


---


