const express = require('express');
const morgan = require('morgan');

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