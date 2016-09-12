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

// updates task in db
router.put('/', function(req, res) {
    var query = { '_id' : req.body._id};
    console.log("Checking if " + JSON.stringify(req.body) + " exists")
    Task.findOne(query, function (err,doc){
        if(err) return res.status(500).send(err)
        if (!doc){
            console.log(req.body._id + " not found!")
            var newdoc = new Task(req.body);
            newdoc.update(function(err){
                if(err) return res.status(500).send(err)
                return res.status(200).send({_id: newdoc._id})
            })

            return res.status(200).send('blal')
        } else {
            console.log(req.body._id + " found!")
            for (var id in req.body ){
                doc[id]= req.body[id];
            }
            doc.save( function(err){
                if(err) return res.status(500).send(err)
                return res.status(200).send({_id: doc._id})
            })
        }
    });
});

router.delete('/:id', function(req, res, next) {
    var query = { '_id' : req.params.id.toString()};
    console.log("Router req:  " + JSON.stringify(req.body) + " exists")
    console.log("query " + query + " exists")
    Task.findOne(query, function (err,doc){
        if(err) return res.status(500).send(err)
        if (!doc){
            console.log(req + " not found!")


            return res.status(200).send('blal')
        } else {
            console.log(req + " found!")
            for (var id in req.body ){
                doc[id]= req.body[id];
            }
            doc.remove( function(err){
                if(err) return res.status(500).send(err)
                return res.status(200).send({_id: doc._id})
            })
        }
    });
});

module.exports = router;
