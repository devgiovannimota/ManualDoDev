const express = require("express");
const router = express.Router();
const taskController = require("./controllers/tasksControllers");
const middlewares = require("./middlewares/tasksMiddleware");

router.get("/tasks", taskController.getAll);
router.post("/task", middlewares.validationBody, taskController.createTask);
router.delete("/task/:id", taskController.deleteTask);

module.exports = router;
