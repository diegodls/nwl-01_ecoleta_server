import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('point');
};

/*

UP = Serve para criar/atualziar
DOWN = Serve para desfazer o UP (deletar)

- importando o Knex (com maiúsculo) para usa-lo para definir o knex (minúsculo) para usar com o typescript(autocompletar ao digitar)
 - npm knex migrate:latest --knexfile knexfile.ts migrate:latest
*/