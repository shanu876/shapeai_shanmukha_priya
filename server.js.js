const express = require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req ,res){
  var n1=req.body.num1;
  var n2=req.bidy.num2;
  console.log(req.body.num1);
  res.send("n1+n2");
});

app.listen(3000, function(){
  console.log("server has started on port 3000");
});
