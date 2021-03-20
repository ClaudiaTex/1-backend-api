const express = require('express');
const morgan = require('morgan');
const usersData = require('./users.json');
const fs = require('fs');

//SERVER
const app = express();

//SETTINGS
app.set('port', 3500);

//MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

//ENDPOINTS

app.get('/', (req,res) =>{
    res.send('Hello world!')
})








//PORT
app.listen(app.get('port'), () =>{
    console.log('Server on port:', app.get('port'));
});