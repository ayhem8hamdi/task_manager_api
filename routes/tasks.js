const express= require("express");
const router = express.Router;
const tasksController= require("../controllers/tasks_controller");


router.route("/").get(tasksController.getallTasks);


module.exports = router;