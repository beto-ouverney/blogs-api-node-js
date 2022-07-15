const express = require('express');
const helmet = require('helmet');

// ...

const app = express();
app.use(express.json());
app.use(helmet());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
