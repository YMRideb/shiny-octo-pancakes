const express = require("express");
const app =  express();
const port = 8000;

//get, post, put, delete

app.get("/api",(req, res)=>{
    res.json({message: "there is no spoon"})

})


//this needs to be below all the other code blocks
app.listen(port,() => console.log(`listening on port: ${port}`));