const express = require('express');
const router = express.Router();

const houseController = require('../controllers/houseController');
const { houseCreateRules, validate } = require('../middlewares/validators');

// Todas las casas
router.get('/', houseController.getAll);

// Casa por id (y miembros)
router.get('/:id', houseController.getById);

// Crear casa
router.post('/', houseCreateRules, validate, houseController.create);

// Actualizar casa
router.put('/:id', houseCreateRules, validate, houseController.update);

// Eliminar casa
router.delete('/:id', houseController.remove);

module.exports = router;
