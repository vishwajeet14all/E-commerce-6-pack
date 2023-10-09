class ErrorHandler extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statusCode = statuscode;
  }
}

module.exports = ErrorHandler;
