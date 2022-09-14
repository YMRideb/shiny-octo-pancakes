const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema(
    {
        prompt: String,
        delivery: String
    },
    {timestamps: true}
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;