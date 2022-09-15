const {
  createJoke,
  getAllJokes,
  getJokeById,
  deleteJokeById,
  updateJokeById,
} = require("../services/joke.service");

const handleCreateJoke = async (req, res) => {
  try {
    const joke = await createJoke(req.body);
    return res.json(joke);
  } catch (error) {
    //400 == bad request
    //sending an error status code will trigger .catch on client side
    return res.status(400).json(error);
  }
};

const handleGetAllJokes = async (req, res) => {
  try {
    const jokes = await getAllJokes();
    return res.json(jokes);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetJokeById = async (req, res) => {
  try {
    const joke = await getJokeById(req.params.id);
    return res.json(joke);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const handleUpdateJokeById = async (req, res) => {
  try {
    const joke = await updateJokeById(req.params.id, req.body);
    return res.json(joke);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleDeleteJokeById = async (req, res) => {
  try {
    const joke = await deleteJokeById(req.params.id);
    return res.json(joke);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// //the following code block is not required for the exam
// // but may help with bigger projects
// const handleCreateManyJokes = async (req, res) => {
//     try{
//         if(Array.isArray(req.body) === false){
//             throw new Error('The request body must be an array.');
//         }
//         const settledOutcomes = await createManyJokes(req.body);
//         return res.json(settledOutcomes);
//     } catch (error) {
//         return res.status(400).json(error);
//     }
// }

//export an object of our controller methods so they can be added to routes
module.exports = {
  //long-form key: value pair
  handleCreateJoke,
  handleGetAllJokes,
  handleGetJokeById,
  handleUpdateJokeById,
  handleDeleteJokeById,
};
