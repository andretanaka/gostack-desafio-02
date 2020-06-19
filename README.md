<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 02: Conceitos do Node.js
</h3>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <a href="https://github.com/andretanaka">
    <img alt="Made by André Tanaka" src="https://img.shields.io/badge/made%20by-André Tanaka-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/andretanaka/gostack-desafio-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/andretanaka/gostack-desafio-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#memo-licença">Licença</a>
</p>

### :checkered_flag: Rotas da aplicação

- **`POST /repositories`**: Rota que salva um novo repositório. A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição.

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota deve alterar apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
