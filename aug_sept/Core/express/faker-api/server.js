const express = require("express");
const app =  express();
const port = 8000;

//make sure these two line are before any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//get, post, put, delete

const UserList = [
    {_id: 1, firstName: "James", lastName: "Holden", email: "captain@roci.net", password: "qwerty12345"},
    {_id: 2, firstName: "Naomi", lastName: "Nagata", email: "xo@roci.net", password: "L0r3m!psum"},
    {_id: 3, firstName: "Alex", lastName: "Kamal", email: "pilot@roci.net", password: "qwerty12345"}
]

// const CompanyList = [
//     {_id: 1, name: "Rocinante Gas Freighter", address: {street: "Fifth Level", city: "Anti-spinward", state: "The Belt", zipCode: "99999", country: "Sol"}}
// ]

app.get("/api",(req, res)=>{
    res.json({message: "wubba lubba dub dubs"})

})

app.get("/api/dashboard", (req, res)=>{
    res.json({
        count: UserList.length,
        results: UserList
    })
})

app.get("/api/dashboard/:idx", (req, res)=>{
    res.json({
        results: UserList[req.params.idx]
    })
})

app.post("/api/dashboard",(req, res)=>{
    console.log(req.body)
    UserList.push(req.body)
    res.json({
        count: UserList.length,
        results: UserList
    })
})

app.put("/api/dashboard/:idx/update", (req, res)=>{
    UserList[req.params.idx] = req.body;
    res.json({
        results: UserList[req.params.idx]
    })
})

app.delete("/api/dashboard/:idx", (req, res)=>{
    UserList.splice(req.params.idx, 1);
})


//this needs to be below all the other code blocks
app.listen(port,() => console.log(`listening on port: ${port}`));