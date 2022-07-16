class ErrorsHandler {
  constructor(defaultStatus = 500) { 
    this.defaultStatus = defaultStatus;
  }
  
  handle(error, _req, res, _next) {
    console.log('TESTE1');
    console.log(error);
    if (error instanceof Error) {
      return res.status(error.status).json({ message: error.message });
    }
    return res.status(this.defaultStatus).json({ message: 'Internal error' });
  }
}

const errorsHandler = new ErrorsHandler();

module.exports = { errorsHandler };