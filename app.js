// Imports
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const path = require('path');

require('dotenv').config();


const app = express();

require('ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


app.set('view engine', 'ejs');


const port = process.env.PORT || 5000;


// Middlewares

app.use(cors());
//app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));



// Routes
app.use(require('./src/routes/routes'));


app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/';
           }, 3000)           
        )();
        </script>
    </h1>`)
});


// Starting the server
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));