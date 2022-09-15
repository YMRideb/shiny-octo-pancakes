const express = require('express');

const {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleUpdateJokeById,
    handleDeleteJokeById
} = require('../controllers/jokes.controller')

const router = express.Router()

//notice that when handleCreateJoke is not called now, its called back later
//when the client visits the route
router.post('/', handleCreateJoke);
router.get('/', handleGetAllJokes);
// router.get('/many', handleCreateManyJokes);

// data at the :id spot in urlis accessed with req.params.id
//route params can be named anything  and the name will be added to the req.params
router.get('/:id', handleGetJokeById);
router.put('/:id', handleUpdateJokeById);
router.delete('/:id', handleDeleteJokeById);

module.exports = {jokeRouter: router};