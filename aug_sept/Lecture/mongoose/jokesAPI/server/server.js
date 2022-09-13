const express = require('express');
const cors = require('cors');

//Environment Variables

//this file doesnt need to export anything, so we need a variable
require('/config/mongoose.config');

//app is a function but it also has key value pairs on it like an object
const app = express()

//app.use is adding middleware
//stuff that happens in the middle of the request and response
//avoid cors error since our frontend is running on a different port
//so our requests are 'cross-origin' port 3000 -> 8000
app.use(cors())

//req.body will be undefined without the following line
app.use(express.json())



app.listen(port, () =>
console.log(`Listening on port ${port} for REQuests to RESpond to.`));