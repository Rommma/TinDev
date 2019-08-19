const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DeslikeController = require('./controllers/DeslikeController');

const routes = express.Router(); //rotas do servidor

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/deslikes', DeslikeController.store);

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