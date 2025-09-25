const express = require('express');
const router = express.Router();

const characterController = require('../controllers/characterController');
const { characterCreateRules, validate } = require('../middlewares/validators');

// Visualizar todos los documentos de la colección
router.get('/', characterController.getAll);

// Obtener un documento específico por su ID
router.get('/:id', characterController.getById);

// Crear (con validación)
router.post('/', characterCreateRules, validate, characterController.create);

// Actualizar la información de un documento
router.put('/:id', characterCreateRules, validate, characterController.update);

// Eliminar un documento
router.delete('/:id', characterController.remove);

module.exports = router;
