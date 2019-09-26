const express=require('express');
const app=express();
bodyParser = require('body-parser')
path = require('path');
var mongoose=require('./express/model/connection')


app.use(express.static(path.join(__dirname,"web")))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))



app.listen(7898,function()
{	
	console.log("Server Run At : http://localhost:7898")
})