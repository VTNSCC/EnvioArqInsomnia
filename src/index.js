const express = require('express');
const morgan = require('morgan');

//Criando a aplicação
const app = express();

//repassa o app ao controller (de forma a mante-lo unico no sistema), para importar os modulos presentes na pasta controller
require("./app/controllers/routes")(app);

port = process.env.PORT || 3000;

app.listen(port);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
console.log("Servidor executando na porta " + port);
