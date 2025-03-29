/*const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
router.use('/api-docs',swaggerUi.serve);
router.get('/api-docs',swaggerUi.setup(swaggerDocument));

module.exports = router;*/


const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const path = require('path');  // Use path to resolve the file path

const swaggerDocument = require(path.resolve(__dirname, '../swagger.json'));  // Correct path to the Swagger file

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;