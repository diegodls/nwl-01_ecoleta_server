import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('points_items', table => {
        table.increments('id').primary();
        table.string('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        table.string('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('points_items');
};

/*

UP = Serve para criar/atualziar
DOWN = Serve para desfazer o UP (deletar)

- importando o Knex (com maiúsculo) para usa-lo para definir o knex (minúsculo) para usar com o typescript(autocompletar ao digitar)
 - npm knex migrate:latest --knexfile knexfile.ts migrate:latest
*/