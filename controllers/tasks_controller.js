const asyncHandler = require('express-async-handler');
const Tasks = require("../models/task_model");

// get all tasks : 

const getAllTasks =asyncHandler(
  async  (req, res) => {
    const allTasks= await Tasks.find();
    res.status(200).json(allTasks);
}
); 

const getTaskById = (req, res) => {
  res.json({ message: "get task by id" });
};
// create task :

const createTask = asyncHandler(async (req, res) => {
    const {taskName,isCompleted}=req.body;
    const newTask= await Tasks.create({
            taskName: taskName,
        isCompleted: isCompleted || false,
    })
     res.status(201).json({
        data: {
            taskName: newTask.taskName,
            isCompleted: newTask.isCompleted,
            createdAt: newTask.createdAt,
            updatedAt: newTask.updatedAt,
        },
        message: 'Task created successfully',
    });
});

const updateTaskById = (req, res) => {
  res.json({ message: "update task by id" });
};

const deleteTaskById = (req, res) => {
  res.json({ message: "delete task by id" });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById
};
