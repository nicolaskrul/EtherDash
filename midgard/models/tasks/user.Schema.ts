var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    text:String,
    completed:Boolean

},
{
    collection: 'User'
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', taskSchema);

// make this available to our users in our Node applications
module.exports = User;
