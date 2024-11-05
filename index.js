const express = require("express");
const fs = require("fs");
const app = express();
const data = require("./data.json");
app.use(express.json());
app.get("/users", (req, res) => {
  res.send(data);
});
app.post("/login", (req, res) => {
  const body = req.body;
  const id = body.id;
  const pickuser = data.find((user) => {
    return user.id === id;
    if(pickuser){
        res.send(pickuser)
    }else{
        res.send("not found")
    }
  });
});

app.listen(8080, () => console.log("Server is running"));
