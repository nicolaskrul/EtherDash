var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var userSchema = require('../models/user.Schema.ts');
// var User = mongoose.model('User', userSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/:id', function(req, res) {
//     Task.create({
//         text: req.body.text,
//         completed: req.body.completed
//         }, function(err, tasks) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(tasks);
//             }
//
//         });
// });

router.post('/user', function(req, res) {
    var query = {   'email' : req.body.email,
                    'username' : req.body.username,
                    'password': req.body.password
                };
    console.log("Creating " + req.body.username + " exists")
    userSchema.create(query, function (err,doc){
        if(err) return res.status(500).send(err)
        return res.status(200).send('registration completed')
    });
});
module.exports = router;
