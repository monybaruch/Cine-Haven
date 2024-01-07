const notFound = (req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // cheak for mongoose cast error when the res of ObjectId is bad
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = 'Resource not found try again!';
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
  });
};

export { notFound, errorHandler };
