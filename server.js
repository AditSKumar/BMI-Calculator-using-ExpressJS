const express= require('express')
const bodyParser = require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000,function(){
    console.log("the server has started")
})
/*
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
    var num1=Number(req.body.num1)
    var num2=Number(req.body.num2)
    var result=num1+num2
    console.log(req.body)
    res.send("<h1>The sum is "+result+"</h1>")
})*/

app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/bmi", function(req,res){
    var num1=Number(req.body.num1)
    var num2=Number(req.body.num2)
    var bmi=num1/(num2*num2)
    res.send("<h1>The BMI is "+bmi+"</h1>")
})