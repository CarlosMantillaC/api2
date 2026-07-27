const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: 'Acceso denegado: No se proporcionó un token de autenticación'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        message: 'El token ha expirado, por favor inicia sesión nuevamente'
      });
    }

    return res.status(403).json({
      message: 'Token inválido o no autorizado'
    });
  }
};

module.exports = authMiddleware;