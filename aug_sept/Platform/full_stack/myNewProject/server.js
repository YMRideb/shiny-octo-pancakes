const express = require("express");
const app = express();
const port = 8000;


app.listen(port, ()=> console.log(`This server is now spinning on port ${port}`));