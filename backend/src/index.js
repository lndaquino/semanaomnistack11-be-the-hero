const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors()); // usado em desenvolvimento, em produção ver abaixo pra permitir acesso somente daquele frontend
//app.use(cors({origin: 'http://meuapp.com'}));

app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * Rota - caminho completo da url (ex: localhost:3333/users)
 * Recurso - o q queremos acessar (ex: users)
 */

 /**
  * Métodos HTTP
  * GET: usado sempre q quisermos buscar uma informação do backend e retornar ao navegador. Executado sempre q colocamos uma rota no browser e damos enter
  * POST: usado sempre q quisermos criar uma informação no backend
  * PUT: quando se quer alterar uma informação no backend
  * DELETE: quando se quer deletar uma informação no backend
  */

  /**
   * Tipos de parâmetro
   * 
   * 
   * Query Params: listar usuario, por exemplo, apenas com o nome Lucas. Parametros nomeados enviados na rota depois do simbolo ? e servem para filtros, paginacao
   * Route Params: parametros usados para identificar recuros (exemplo, usuario com id 1 /users/1)
   * Request Body: corpo da requisição utilizado para criar ou alterar recursos
   */

   /**
    * Bancos de dado
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB etc.
    * 
    * Usando o driver do banco: faz requisições usando linguagem SQL, que podem ter diferenças entre alguns bancos SQL
    * Usando Query builder (knexjs.org): usa linguem javascript e q torna depois portável pra qq banco SQL
    */


/**
 * Mapeando as entidades: são tudo aquilo que representa algo que será salvo no banco de dados
 * 
 * ENTIDADES
 *  ONG
 *  casos da ong (incident)
 * 
 * 
 * FUNCIONALIDADES
 *  Login de ONG
 *  Cadastro de ONG
 *  Logout de ONG
 *  Cadastrar novos casos
 *  Deletar casos
 *  Listar casos especificos de uma ONG
 *  Listar todos os casos
 *  Entrar em contato com ONG via Zap e email
 */