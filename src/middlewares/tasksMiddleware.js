const validationBody = (request, response, next) => {
  const { body } = request;

  if (body.tittle === undefined) {
    return response
      .status(400)
      .json({ Message: "The field TITTLE is required" });
  }
  if (body.tittle === "") {
    return response
      .status(400)
      .json({ Message: "The field TITTLE cannot be empty" });
  }
  next();
};

module.exports = {
  validationBody,
};
