const genericHandler = ({ blFunction, res, req, httpCode = 200, next }) => {
  return async (...args) => {
    try {
      const result = await blFunction(...args);

      res.status(httpCode).json(result);
      next();
    } catch (e) {
      req._params = req.params;

      next(e);
    }
  };
};

export default genericHandler;
