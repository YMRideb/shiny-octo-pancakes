const JokeController = require('../controllers.jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:_id', JokeController.getJokeById);
    app.put('/api/jokes/:_id', JokeController.updateJoke);
    app.post('/api/jokes/:_id', JokeController.createNewJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteJoke);
}