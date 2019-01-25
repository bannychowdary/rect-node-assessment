var express= require('express')
var mongoose= require('mongoose')
var bodyparser = require('body-parser')
var mediapage =require('./mediapage/mediapage')
var data = require('./datastore/data')
var dataStore = require('./datastore/datastore')

var app = express()

app.use(bodyparser.json())

var urlencodeparser = bodyparser.urlencoded({extended:false})

mongoose.connect("mongodb://localhost:27017/mydatabase")

var db = mongoose.connection

db.on('error', function(){
    console.log("erro connection to the database")
})

db.once('open', function(){
    console.log("connection to database")
})

app.get("/welcome", function(req,res){
    res.send("hello from mongo")
})


app.post("/add",function(req, res){
    console.log(req.body)
    var media = new mediapage()
        media.title = req.body.title
        media.description = req.body.description
        media.tags = req.body.tags

        
        
    friend.save(function(err){
        if(err){
            res.send(err)
        }else{
            res.json({message:'friend added'})
        }
    })

})

app.listen(3000)