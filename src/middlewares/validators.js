const { body, validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  next();
};

const characterCreateRules = [
  body('name').trim().notEmpty().withMessage('name is required'),
  body('age').optional().isInt({ min: 0 }).withMessage('age must be positive integer'),
  body('alive').optional().isBoolean().withMessage('alive must be boolean')
];

const houseCreateRules = [
  body('name').trim().notEmpty().withMessage('house name is required')
];

module.exports = { validate, characterCreateRules, houseCreateRules };
