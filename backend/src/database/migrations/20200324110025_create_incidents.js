
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments(); // chave primária auto increment

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); // relacionamento com outra tabela

        table.foreign('ong_id').references('id').inTable('ongs'); // chave estrangeira pra relacionar
 
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
