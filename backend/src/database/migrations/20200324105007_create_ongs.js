
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { //deu algum problema preciso desfazer o q eu fiz
  return knex.schema.dropTable('ongs'); // apaga a table criada na migration se quiser desfazer ou der algo errado
};
