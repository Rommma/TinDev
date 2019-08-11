const express = require('express');

const DevController = require('./controllers/DevController');

const routes = express.Router(); //rotas do servidor

routes.post('/devs', DevController.store);

//Get, Post, Put, Delete
/*routes.get('/', (req, resp) => {
    //return resp.send(`Hello world ${ req.query.name }`);
    return resp.json({ message: `Olá world ${ req.query.name }` });
});*/

/*routes.post('/devs', (req, resp) => {
    console.log(req.body);

    return resp.json({ ok: true });
});*/

module.exports = routes;