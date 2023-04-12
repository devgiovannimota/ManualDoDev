const tasksModel = require("../models/tasksModel");

const getAll = async (request, response) => {
  const tasks = await tasksModel.getAll();
  return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response
    .status(201)
    .json({ InsertId: createdTask.insertId, Name: request.body.tittle });
};

const deleteTask = async (request, response) => {
  const { id } = request.params;
  await tasksModel.deleteTask(id);
  console.log(id);

  return response.status(204).json();
};

const updatedTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return response.status(204).json(request.body);
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updatedTask,
};
