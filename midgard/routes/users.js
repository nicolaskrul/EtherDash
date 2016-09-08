var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/:id', function(req, res) {
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

router.post('/:id', function(req, res) {
    var query = {   'username' : req.body.username,
                    'password': req.body.password
                };
    console.log("Checking if " + req.body.username + " exists")
    Task.findOne(query, function (err,doc){
        if(err) return res.status(500).send(err)
        if (!doc){
            console.log(req.body..username + " not found!")
            var newdoc = new Task(req.body);
            newdoc.save(function(err){
                if(err) return res.status(500).send(err)
                return res.status(200).send({_id: newdoc..username})
            })

            return res.status(200).send('blal')
        } else {
            console.log(req.body.username + " found!")
            for (var id in req.body ){
                doc[id]= req.body[id];
            }
        }
    });
});
module.exports = router;
