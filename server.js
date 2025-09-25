
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./src/config/db');

dotenv.config();


connectDB();

const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/characters', require('./src/routes/characterRoutes'));
app.use('/api/houses', require('./src/routes/houseRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));


app.use(express.static(path.join(__dirname, 'src/public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
