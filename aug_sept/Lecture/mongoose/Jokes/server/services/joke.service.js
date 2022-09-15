const { Joke } = require("../models/jokes.model");

const createJoke = async (data) => {
  const joke = await Joke.create(data);
  return joke;
};

const getAllJokes = async () => {
  const jokes = await Joke.find();
  return jokes;
};

const getJokeById = async (id) => {
  const joke = await Joke.findById(id);
  return joke;
};

const deleteJokeById = async (id) => {
  const joke = await Joke.findByIdAndDelete(id);
  return joke;
};

const updateJokeById = async (id, data) => {
  const joke = await Joke.findByIdAndUpdate(id, data, {
    //rerun validations
    runValidators: true,
    //return the updated joke
    new: true,
  });
  return joke;
};

//the following block is not needed for coding dojo
//but can help with projects -- Thanks max!
const createManyJokes = async (documents) => {
  const createPromises = documents.map((document)=>
  createJoke(document)
  );
  return Promise.allSettled(createPromises);
};


//export all the services methods in an object
module.exports = {
  //long-form key: value
  createJoke: createJoke,
  getAllJokes: getAllJokes,
  getJokeById: getJokeById,
  deleteJokeById: deleteJokeById,
  updateJokeById: updateJokeById
};
