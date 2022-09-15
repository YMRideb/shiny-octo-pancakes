const { default: mongoose } = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      // required: [true, `${PATH} is required`],
      // minlength: [2, `${PATH} must be at least ${MINLENGTH} characters.]`,
    },

    delivery: {
      type: String,
      // required: [true, `${PATH} is required`]
    },
  },
  { timestamps: true } // adds in createdAt and updatedAt
); 

//register the schema with mongoose and provide a string to name the collection
//also returns a reference to our model that we can use for DB operations
const Joke = mongoose.model('Joke', JokeSchema);

  //always exporting an object even when we only have one thing to export
  //makes it easy to add more exports later if ever needed without breaking 
  //any code that imports from this file
module.exports = {Joke: Joke};
