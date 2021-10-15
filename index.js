const express = require("express");
const app = express();

//for local
const host = "http://localhost:";

//for deployment
// const host = "";

const port = 5000;

app.get("/",(req,res)=>{
  res.send("This is a Sample Express App");
})

app.get("/users",(req,res)=>{
  res.json({
    name:"ayush",
    college: "iiit lucknow"
  });
});

app.listen(port,()=>{
  console.log('Server is running on 5000\n Visit:',host + String(port));
});

module.exports = {host};