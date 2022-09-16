const express = require("express");

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const port = 8000;

require('../config/mongoose.config');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', productRouter);

app.listen(port, ()=>
console.log(`Listening on port ${port} for REQuests to RESpond to.`))
