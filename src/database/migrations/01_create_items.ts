import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();

    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
};

/*

UP = Serve para criar/atualziar
DOWN = Serve para desfazer o UP (deletar)

- importando o Knex (com maiúsculo) para usa-lo para definir o knex (minúsculo) para usar com o typescript(autocompletar ao digitar)
 - npm knex migrate:latest --knexfile knexfile.ts migrate:latest
*/