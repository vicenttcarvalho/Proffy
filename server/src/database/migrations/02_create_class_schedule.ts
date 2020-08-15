import Knex from 'knex';

export async function up(knex: Knex) {
   return knex.schema.createTable('class_schedule', table => {
       table.increments('id').primary();

       table.integer('week_day').notNullable(); //0 a 6(Dom a sab)
       table.integer('from').notNullable(); //horário que começa
       table.integer('to').notNullable(); //horário que termina

       table.integer('class_id') 
       .notNullable()
       .references('id')
       .inTable('classes')
       .onUpdate('CASCADE') 
       .onDelete('CASCADE'); 
   });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}