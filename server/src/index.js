const express = require('express');
const morgan = require('morgan');
const controller = require('./controller');

//SERVER
const app = express();

//SETTINGS
app.set('port', 3500);

//MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

//ENDPOINTS

app.get('/', controller.hello);
app.post('/user', controller.createUser);
app.get('/users', controller.getUsers);
app.get('/users/:dni', controller.getUser);
app.put('/user/:dni', controller.updateUser);
app.delete('/user/:dni', controller.deleteUser);


//PORT
app.listen(app.get('port'), () =>{
    console.log('Server on port:', app.get('port'));
});