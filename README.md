# API completa utilizando NodeJS e express.

## 🪧 Sobre

API com CRUD para To-do list desenvolvido juntamente com a video aula do **[Manual do Dev](https://www.youtube.com/watch?v=Cdu0WJhI-d8&t=1539s)** Como criar uma API completa com NodeJS e Express | Backend - **Projeto Full Stack**.

---

## 🚀 Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/)
- [Insomnia](https://insomnia.rest/) - para o teste da API
- [Dockers](https://www.docker.com/) - Para rodar o mysql em uma VM

## 📦 Como baixar o projeto

```bash
  # Clonar o repositório
  $ git clone https://github.com/devgiovannimota/ManualDoDev

  # Entrar no repositório
  $ cd ManualDoDev

  # Instalar as dependências
  $ npm install

  # Iniciar o projeto
  $ npm run dev
```

## 📦 Como subir a imagem sql do projeto no dockers

$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:

## 📦 Criação do banco de dados > Inserir a query abaixo

    CREATE DATABASE IF NOT EXISTS todolist;

    USE todolist;

    CREATE TABLE IF NOT EXISTS tasks (
    id_tasks INT AUTO_INCREMENT PRIMARY KEY,
    tittle VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at VARCHAR(50) NOT NULL

);

# Usando a API

Voce pode acessar a API usando os seguintes endpoints:

## `/task`

### `POST`

- `/task` : Criação da atividade
  - Body:
    - `tittle: string` Nome da atividade

### `PUT`

- `/task/:id` : Update da atividade"
  - Body:
    - `tittle: string` Nome da atividade

### `DELETE`

- `/task/:id` : Delete da atividade"

### `GET`

- `/tasks` : Ver atividades
