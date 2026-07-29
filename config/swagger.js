const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API2',
      version: '1.0.0',
      description: 'API con Express, PostgreSQL, JWT y autenticación',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Desarrollo' },
      { url: 'https://api2-2xyd.onrender.com', description: 'Producción' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js', './routes/**/*.js'],
};

module.exports = swaggerJsdoc(options);
