const { isUuid } = require("uuidv4");

function validateRepositoryId(request, response, next) {

  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid repository ID" });
  }
  return next();
}

function logRequests(request, response, next) {

  const { method, url } = request;
  const logLabel = `Route: '[${method.toUpperCase()}] ${url}' requested at ${new Date()}`;
  console.log(logLabel);

  return next();
}

module.exports = {validateRepositoryId, logRequests}