const mongoose = require('mongoose');

// Tasks schema 
const taskSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
