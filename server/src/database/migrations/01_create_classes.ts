import Knex from 'knex';

export async function up(knex: Knex) {
   return knex.schema.createTable('classes', table => {
       table.increments('id').primary();
       table.string('subject').notNullable(); //matéria
       table.decimal('cost').notNullable(); //custo da hora/aula

       table.integer('user_id') //relacionando id 
       .references('id')
       .inTable('users')
       .onUpdate('CASCADE') //caso o id for alterado, altera em todos os lugares que esse id está sendo usado
       .onDelete('CASCADE'); //deleta tudo
   });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}