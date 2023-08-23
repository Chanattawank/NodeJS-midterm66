const UserController = require('./controllers/UserController')

module.exports = (app) => {
    //get all
    app.get('/users', UserController.index),

    //create
    app.post('/user', UserController.create),

    //edit
    app.put('/user/:userId', UserController.put),

    //show
    app.get('/user/:userId', UserController.show)
   
}