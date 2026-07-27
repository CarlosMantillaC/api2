const express = require('express');
const router = express.Router();

const validate = require('../../middlewares/validate');
const { registerSchema, loginSchema } = require('../../validators/authValidator');
const registerController = require('../../controllers/auth/registerController');
const loginController = require('../../controllers/auth/loginController');

router.post('/register', validate(registerSchema), registerController);
router.post('/login', validate(loginSchema), loginController);

module.exports = router;