const express = require("express");
const app =  express();
const port = 8000;

//get, post, put, delete

// const UserList = [
//     {_id: 1, firstName: "James", lastName: "Holden", email: "captain@roci.net", password: "qwerty12345"}
// ]

// const CompanyList = [
//     {_id: 1, name: "Rocinante Gas Freighter", address: {street: "Fifth Level", city: "Anti-spinward", state: "The Belt", zipCode: "99999", country: "Sol"}}
// ]

app.get("/api",(req, res)=>{
    res.json({message: "wubba lubba dub dubs"})

})


//this needs to be below all the other code blocks
app.listen(port,() => console.log(`listening on port: ${port}`));