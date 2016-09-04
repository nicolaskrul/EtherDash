var express = require('express');
var router = express.Router();

var Task = require('../models/tasks/task.Schema.ts');

// sends all tasks
router.get('/all', function(req, res) {
    Task.find('Tasks', {}, function(err, tasks) {
        if (err) {
            res.send(err);
        } else {
            res.json(tasks);
        }

    });

});


// creates new task in db
router.post('/', function(req, res) {
    Task.create({
        text: req.body.text,
        completed: req.body.completed
        }, function(err, tasks) {
            if (err) {
                res.send(err);
            } else {
                res.json(tasks);
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
