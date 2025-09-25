# GOT API - Parcial 1 (Aplicaciones Híbridas)

**Autor:** Alejo Herrera  
**Materia:** Aplicaciones Híbridas  
**Profesor:** Jonathan Emanuel Cruz 
**Comisión:** DWN4AV
En las Routes deje indicaciones en comentarios de que hace cada cosa ya que la API esta hecha en su mayoria en ingles para que me sirva para mi portfolio
# GOT API - Parcial 1 (Aplicaciones Híbridas)

**Autor:** Alejo Herrera  
**Materia:** Aplicaciones Híbridas  
**Profesor:** Jonathan Emanuel Cruz
**Comisión:** DWN4AV

---

## Descripción
Esta es una **API RESTful** desarrollada como parcial de la materia *Aplicaciones Híbridas*.  
Tema: *Game of Thrones*.  
Implementada con **Node.js**, **Express** y **MongoDB (Mongoose)**.  

Exponen endpoints para manejar:

- `characters` (personajes)  
- `houses` (casas)  

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
2. 
Copiar el archivo de variables de entorno:
cp .env.example .env
Editar .env si usás MongoDB Atlas o querés cambiar el puerto:

ini
Copiar código
PORT=3000
MONGO_URI=mongodb://localhost:27017/got_parcial
Instalar dependencias:

bash
3.
Instalar dependencias:
npm install

4. 
Poblar datos de ejemplo (opcional):
bash
npm run seed
Esto crea:

Casas: House Stark, House Lannister

Personajes: Arya Stark, Eddard Stark, Tyrion Lannister

5.
Levantar el servidor:
bash
npm run dev   # con nodemon
# o
npm start     # Node normal

6.
Abrir en el navegador:
arduino
Copiar código
http://localhost:3000/
Verás la página principal con info de la API y los endpoints clickeables.