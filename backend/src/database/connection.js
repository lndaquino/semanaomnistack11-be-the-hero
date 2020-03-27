// cuida da conexão com o banco de dados
const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; // pega a variável de ambiente configurada no package.json pra ver se está em ambiente de teste ou não

const connection = knex(config);

module.exports = connection;