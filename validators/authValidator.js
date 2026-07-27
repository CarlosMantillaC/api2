const { z } = require('zod');

const registerSchema = z.object({
  email: z.string({ required_error: 'Email es requerido' }).email('Email inválido'),
  password: z.string({ required_error: 'Contraseña es requerida' }).min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

const loginSchema = z.object({
  email: z.string({ required_error: 'Email es requerido' }).email('Email inválido'),
  password: z.string({ required_error: 'Contraseña es requerida' }).min(1, 'Contraseña no puede estar vacía'),
});

module.exports = { registerSchema, loginSchema };
