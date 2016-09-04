var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var taskSchema = new Schema({
    text:String,
    completed:Boolean
},
{
    collection: 'Tasks'
});

// the schema is useless so far
// we need to create a model using it
var Task = mongoose.model('Task', taskSchema);

// make this available to our users in our Node applications
module.exports = Task;

//todo: create service for tasks. GetTasks, postTasks. id for list. Connect to front-end.
