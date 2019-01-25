var mongoose = require('mongoose')

var mySQLSchema = mongoose.Schema

var addfiles = new mySQLSchema({
    "title" : String,
    "description" : String,
    "tag": String,
    

},{collection:'mydatabases'})

module.exports = mongoose.model('mydatabases', addfiles)