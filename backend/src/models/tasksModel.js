const { request } = require("express");
const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute(`SELECT * FROM tasks`);
  return tasks;
};

const createTask = async (task) => {
  const { tittle } = task;
  const date = new Date(Date.now()).toLocaleString("pt-BR");

  const [createdTask] = await connection.execute(
    `INSERT INTO tasks(tittle, status, created_at) VALUES (?,?,?)`,
    [tittle, "Pendente", date]
  );
  return createdTask;
};

const deleteTask = async (id) => {
  const removeTask = await connection.execute(
    `DELETE FROM tasks WHERE id_tasks = ?`,
    [id]
  );
  return removeTask;
};

const updateTask = async (id, task) => {
  const { tittle, status } = task;
  const updatedTask = await connection.execute(
    `UPDATE tasks SET tittle = ? , status = ? WHERE id_tasks = ?`,
    [tittle, status, id]
  );
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
