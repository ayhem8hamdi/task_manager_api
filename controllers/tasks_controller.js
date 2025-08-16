 module.exports.getallTasks = (req,res)=>{
    res.json({message : "get all tasks"});
}

 module.exports.getTaskById = (req,res)=>{
    res.json({message : "get task by id"});
}

 module.exports.createtask = (req,res)=>{
    res.json({message : "Create task"});
}

 module.exports.updateTaskById = (req,res)=>{
    res.json({message : "update task by id"});
}

 module.exports.deleteTaskById = (req,res)=>{
    res.json({message : "delete task by id"});
}