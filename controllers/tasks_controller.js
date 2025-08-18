const asyncHandler = require('express-async-handler');
const Tasks = require("../models/task_model");
const notFoundHelper = require("../helper/not-found-function-helper")

// get all tasks : 

const getAllTasks =asyncHandler(
  async  (req, res) => {
    const allTasks = await Tasks.find({}).select("-__v");
    res.status(200).json(allTasks);
}
); 



// get task by id
const getTaskById = asyncHandler(async (req, res) => {
    const currentTask = await Tasks.findOne({ _id: req.params.id }).select("-__v");

    const exists = notFoundHelper(currentTask, res);
    if (!exists) return;

    res.status(200).json(currentTask);
});



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




// update task by id 

const updateTaskById = asyncHandler(
  async  (req, res) => {

    const {taskName ,  isCompleted}= req.body;

    const  updatedTask =await Tasks.findByIdAndUpdate(req.params.id, { taskName: taskName , isCompleted: isCompleted}, { new: true, runValidators: true });
notFoundHelper(updatedTask);

 res.status(200).json({message : 'task updated successfully', updatedTask});
}
);




// delete  task by id

const deleteTaskById = asyncHandler(async (req, res) => {
 const deletedTask= await Tasks.findByIdAndDelete({_id:req.params.id});
notFoundHelper(deletedTask);

 res.status(200).json({message : "item deleted succesfully", deletedTask});
});

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById
};
