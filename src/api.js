require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const { router } = require('./routes/router');
const { errorsHandler } = require('./middlewares/errorsHandler');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(router);

app.use(errorsHandler.handle);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
