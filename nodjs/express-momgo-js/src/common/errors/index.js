class HttpError extends Error {
  constructor(message, statusCode, err = null) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode < 500 ? 'fail' : 'error';
    this.err = err;
    this.stack = err ? err.stack : null;
  }
}

class ValidationError extends HttpError {
  constructor(error) {
    super(error.issues[0].message, 422, error);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message, err) {
    super(message, 401, err);
  }
}

class NotFoundError extends HttpError {
  constructor(message, err) {
    super(message || 'Not Found', 404, err);
  }
}

class InternalServerError extends HttpError {
  constructor(err) {
    super(err.message || 'Internal Server Error', 500, err);
  }
}

class BadRequestError extends HttpError {
  constructor(message, err) {
    super(message || 'Bad Request', 400, err);
  }
}

export { HttpError, ValidationError, UnauthorizedError, NotFoundError, InternalServerError, BadRequestError };
