<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

# Projeto FindClient - Api

Tecnologias utilizadas no projeto:

- [NestJs]()
- [TypeORM](https://typeorm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [NodeJS](https://nodejs.org/en/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [DotEnv](https://www.npmjs.com/package/dotenv)

## Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
$ npm install
```

Execute as migrations com o comando:

```shell
$ npm run migration:run
```

## Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

# Endpoints

A API possui os seguintes endpoints:

# Clientes

#### `GET /clientes`

Retorna todos os clientes cadastrados.

#### `GET /clientes/:id`

Retorna um cliente específico pelo ID.

#### `POST /clientes`

Cadastra um novo cliente.

#### `PUT /clientes/:id`

Atualiza os dados de um cliente existente pelo ID.

#### `DELETE /clientes/:id`

Remove um cliente pelo ID.

# Contatos

## Todas as rotas de contato precisam ter o token para autenticação!!!

#### `GET /clientes/:id/contatos`

Retorna todos os contatos de um cliente específico pelo ID.

#### `GET /clientes/:id/contatos/:idContato`

Retorna um contato específico de um cliente pelo ID do cliente e do contato.

#### `POST /clientes/:id/contatos`

Cadastra um novo contato para um cliente específico pelo ID.

#### `PUT /clientes/:id/contatos/:idContato`

Atualiza os dados de um contato existente de um cliente pelo ID do cliente e do contato.

#### `DELETE /clientes/:id/contatos/:idContato`

Remove um contato de um cliente pelo ID do cliente e do contato.

## Exemplos de requisição e resposta

### GET /clientes/:id/contatos/:idContato
