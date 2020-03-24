const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query; // se vier numero da página é igual a esse parametro, senão é 1

        const [count] = await connection('incidents').count(); // conta o numero de registro de incidents
        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']); // pesquisa os incidentes de 5 em 5 por página e faz o join com os dados da ONG da tabela ongs
        
        response.header('X-Total-Count', count['count(*)']); // retorna o numero de incidentes total pelo cabeçalho
        return response.json(incidents); // retorna a lista de 5 incidentes da página solicitada
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id}  = request.params;
        const ong_id = request.headers.authorization;
       
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id'
        ).first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({error : 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();

    }
};