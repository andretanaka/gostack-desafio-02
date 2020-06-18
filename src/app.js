const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");
const middlewares = require('./middlewares')
const app = express();

app.use(express.json());
app.use(cors());

app.use(middlewares.logRequests);
app.use("/repositories/:id", middlewares.validateRepositoryId);

const repositories = [];

app.get("/repositories", (request, response) => {

  return response.json(repositories);
});

app.post("/repositories", (request, response) => {

  const { title, url, techs } = request.body;
  const repository = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {

  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found" });
  }

  const { title, url, techs } = request.body;

  const repository = {
    id,
    title: title || repositories[repositoryIndex].title,
    url: url || repositories[repositoryIndex].url,
    techs: techs || repositories[repositoryIndex].techs,
    likes: repositories[repositoryIndex].likes,
  };

  repositories[repositoryIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {

  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found" });
  }

  repositories.splice(repositoryIndex, 1);
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {

  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );
  const repository = repositories[repositoryIndex];

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found" });
  }
  repository.likes = ++repository.likes;

  repositories[repositoryIndex] = repository;

  return response.status(201).json(repository);
});

module.exports = app;
