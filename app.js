var path = require('path')
require('dotenv').config({
    path: path.join(__dirname, 'settings.env')
})

var mongoose =require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useMongoClient: true
})

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./controllers/recipesController')(app)

app.listen(3000, function(){
    console.log('listening on port 3000')
})