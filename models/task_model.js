const mongoose = require('mongoose');

// Tasks schema 
const taskSchema = new mongoose.Schema({
    taskName: { type: String, required: true, trim: true },
    isCompleted: { type: Boolean, default: false , enum: ['true', 'false'], trim:true}
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
