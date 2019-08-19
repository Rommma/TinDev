const express = require('express');
const mongoose = require('mongoose'); //importar ODM
const cors = require('cors'); //Para consumir dados
const routes = require('./routes'); //importar arquivo

const server = express(); //servidor express

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster-7k83r.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true });

server.use(cors());
server.use(express.json()); //usar json
server.use(routes); //adicionando rotas ao servidor

server.listen(3333); //localhost:3333