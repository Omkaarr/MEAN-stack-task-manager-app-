const mongoose = require('mongoose');

//schema

const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    isCompleted: Boolean
})


//Model


module.exports = mongoose.model('task', taskSchema);