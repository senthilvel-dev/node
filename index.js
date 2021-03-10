const {Client} = require('pg');
const {Models} = require('./models');
const connectionstring = 'postgres://postgres:ThiyagaraJ@13.233.140.230:5432/eform';
const client = new Client(connectionstring);
const Express = require('express');
const app = new Express();
var bodyParser = require('body-parser');
var urlencode = bodyParser.json({extended:true})
client.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("connected")
})
app.post('/parse',urlencode,function(req,res){
    console.log(req.body.firstname)
    res.send(req.body.firstname)
})

var server = app.listen(8000,function ()
{
    var host = server.address().address;
    var port = server.address().port;
})
