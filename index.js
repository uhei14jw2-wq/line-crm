const express = require("express");
const app = express();

let users = [];

app.use(express.json());

app.post("/webhook", (req,res)=>{
 users.push({id: Date.now()});
 res.send("ok");
});

app.get("/users",(req,res)=>{
 res.json(users);
});

app.listen(3000);
