var express = require('express');
var router = express.Router();
var Task = require('../models/tasks/task.Schema.ts');

router.get('/all', function(req, res) {
    // var Task = new Task;
    Task.find('Tasks', {}, function(err, tasks) {
        if (err) {
            res.send(err);
        } else {
            res.json(tasks);
            console.log('Res: ' + JSON.stringify(tasks));
        }

    });

});

module.exports = router;


// // create a new user
// var newTask = Task({
//   text: 'Peter Quill',
//   completed: false
// });
//
// // save the user
// newTask.save(function(err) {
//   if (err) throw err;
//
//   console.log('User created!');
// });
