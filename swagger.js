const swaggerAutogen = require('swagger-autogen')(); 

const doc = {
    info: {
        title: 'Contacts Api',
        description: 'Contacts Api',
    },
    host: 'localhost:3001',  // Make sure your API runs on this port
    schemes: ['https', 'http']  // Allow both HTTP and HTTPS as schemes
};

// Correct path to your generated Swagger file and the routes file
const outputFile = './swagger.json';  // Output Swagger file in the root directory
const endpointsFiles = ['./routes/index.js'];  // Adjust this if your routes file is elsewhere

swaggerAutogen(outputFile,endpointsFiles,doc);