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

//CREATE
app.post('/user', controller.createUser);


//PORT
app.listen(app.get('port'), () =>{
    console.log('Server on port:', app.get('port'));
});