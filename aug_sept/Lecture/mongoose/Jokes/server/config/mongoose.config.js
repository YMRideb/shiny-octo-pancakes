//this syntax is used to import package from node modules
//we cant use import syntax because of the project type, require syntax is what to use
const mongoose = require("mongoose");

//the db name usually goes into a .env or config file
//that is git ignored so the prod app can choose a different name if needed
// and also hides the values from the public repo
const dbName = 'Jokes_db';

mongoose.connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log(`Established a connection to the ${dbName} database`))
    .catch(err => console.log(`Something went wrong when connecting to the ${dbName} database`, err));
