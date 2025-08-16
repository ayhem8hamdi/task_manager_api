const express = require('express');
const router = express.Router();
const {getAllTasks,getTaskById,createTask,updateTaskById,deleteTaskById}= require("../controllers/tasks_controller");


router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTaskById).patch(updateTaskById).delete(deleteTaskById);


module.exports = router;