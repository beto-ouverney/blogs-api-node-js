const { CustomError } = require('../helpers/CustomError');

class ErrorsHandler {
  constructor(defaultStatus = 500) { 
    this.defaultStatus = defaultStatus;
  }
  
  handle(error, _req, res, _next) {
    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }
    if (!this.defaultStatus) this.defaultStatus = 500;
    return res.status(this.defaultStatus).json({ message: error.message });
  }
}

const errorsHandler = new ErrorsHandler();

module.exports = { errorsHandler };