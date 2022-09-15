const express = require('express');
const cors = require('cors');
const { jokeRouter } = require('./routes/jokes.routes');

//environment variables
const port = 8000;

//requiring / importing 
require('./config/mongoose.config');

//app is a function, but it also has key: value pairs on it like an object
const app = express()

//req.body is undefined without this line
app.use(express.json())
app.use(express.urlencoded({extended: true}));
//the lines above MUST be before any app.use statements for your routers

//adds all the joke routes with this url prepended to the specific route
//if we had another model, the same is done with THAT model's routes
app.use('/api/jokes', jokeRouter)


app.use(cors())


app.listen(port, ()=>
console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);