module.exports = class ApiError extends Error {
  constructor(error) {
    super();
    this.name = error.name;
    this.message = error.error;
    Error.captureStackTrace(this, this.constructor);
  }
};
