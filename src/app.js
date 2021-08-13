const path = require('path');
const morgan = require('morgan');
const express = require('express');
const  mongoose = require('mongoose');

const app = express();


//Importar rutas 
const route_index = require('./routes/index')



//Base de datos 

mongoose.connect('mongodb://localhost/exprees')
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));


//Configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middelwares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));




//Rutas
app.use('/', route_index)


//Iniciando el servidor
app.listen(app.get('port'), () =>{

console.log(`Server on port ${app.get('port')}`);

});


