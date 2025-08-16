const express = require('express');
const router = express.Router();
const tasksController= require("../controllers/tasks_controller");


router.route("/").get(tasksController.getallTasks).post(tasksController.createtask);
router.route("/:id").get(tasksController.getTaskById).patch(tasksController.updateTaskById).delete(tasksController.deleteTaskById);


module.exports = router;