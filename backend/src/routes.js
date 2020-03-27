//npm start pra iniciar o servidor node. Ver configurações pra ver o q o script start executa
const express = require('express'); // esse arquivo cuidas das rotas
const { celebrate, Segments, Joi } = require('celebrate'); // usado para validação de dados

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create); // validar de id está sendo enviado

routes.get('/ongs', ongController.index); 

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongController.create); // precisa colocar a validação antes de criar o controller, senão ele criar primeiro o controller antes de validar os dados

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), profileController.index); // aqui validamos o cabeçalho pra ver se veio o ID da Ong

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentController.index);

routes.post('/incidents', incidentController.create); //incluir validação de header e dados do body

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), incidentController.delete);

module.exports = routes; //forma de exportar alguma variável de dentro de um arquivo no nodes pra outros arquivos usarem