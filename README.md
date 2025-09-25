# GOT API - Parcial 1 (Aplicaciones Híbridas)

**Autor:** Alejo Herrera  
**Materia:** Aplicaciones Híbridas  
**Profesor:** Jonathan Emanuel Cruz 
**Comisión:** DWN4AV
En las Routes deje indicaciones en comentarios de que hace cada cosa ya que la API esta hecha en su mayoria en ingles para que me sirva para mi portfolio
# GOT API - Parcial 1 (Aplicaciones Híbridas)

**Autor:** Alejo Herrera  
**Materia:** Aplicaciones Híbridas  
**Profesor:** [Nombre del docente]  
**Comisión:** [Número de comisión]

---

## Descripción
Esta es una **API RESTful** desarrollada como parcial de la materia *Aplicaciones Híbridas*.  
Tema: *Game of Thrones*.  
Implementada con **Node.js**, **Express** y **MongoDB (Mongoose)**.  

Exponen endpoints para manejar:

- `characters` (personajes)  
- `houses` (casas)  

---

## Estructura del proyecto

got-api-parcial/
├─ .env.example
├─ package.json
├─ README.md
├─ server.js
├─ src/
│ ├─ config/
│ │ └─ db.js
│ ├─ models/
│ │ ├─ Character.js
│ │ ├─ House.js
│ │ └─ User.js
│ ├─ controllers/
│ │ ├─ characterController.js
│ │ ├─ houseController.js
│ │ └─ userController.js
│ ├─ routes/
│ │ ├─ characterRoutes.js
│ │ ├─ houseRoutes.js
│ │ └─ userRoutes.js
│ ├─ middlewares/
│ │ └─ validators.js
│ └─ public/
│ └─ index.html
└─ seeds/
└─ seed.js

yaml
Copiar código

---

## Requisitos

- Node.js v16+
- MongoDB (local o Atlas)
- Git

---

## Instalación y uso local

1. Clonar el repositorio:

```bash
git clone https://github.com/jojinho2003/got-apirest-parcial.git
cd got-apirest-parcial
Copiar el archivo de variables de entorno:

bash
Copiar código
cp .env.example .env
Editar .env si usás MongoDB Atlas o querés cambiar el puerto:

ini
Copiar código
PORT=3000
MONGO_URI=mongodb://localhost:27017/got_parcial
Instalar dependencias:

bash
Copiar código
npm install
Poblar datos de ejemplo (opcional):

bash
Copiar código
npm run seed
Esto crea:

Casas: House Stark, House Lannister

Personajes: Arya Stark, Eddard Stark, Tyrion Lannister

Levantar el servidor:

bash
Copiar código
npm run dev   # con nodemon
# o
npm start     # Node normal
Abrir en el navegador:

arduino
Copiar código
http://localhost:3000/
Verás la página principal con info de la API y los endpoints clickeables.