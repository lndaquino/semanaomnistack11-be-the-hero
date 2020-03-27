const request = require('supertest'); 
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); // volta o banco de dados ao estado anterior pra não popular infinitamente nem influenciar em outros testes
        await connection.migrate.latest(); // executa as migrations no banco de dados de teste
    });

    afterAll(async () => { // executa depois de todos os testes
        await connection.destroy(); // fecha a conexão com o banco de dados
    });
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs') // .set('Authorization', 'e3897f1a') pra setar envio de infos pra test
            .send(
                {
                    name : "Teste",
                    email : "contato@gmail.com" ,
                    whatsapp : "11983750888",
                    city : "Mogi das Corujas",
                    uf : "SP"
                }
            );

        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});