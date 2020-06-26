import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

/*
- Migrations = histórico de banco de dados
- A execução das migrations seguem a ordem alfanumerica da pasta, então tome cuidado ao criar uma migration "0_migration1.ts" sendo que ela precisa da migration "1_migration2.ts", pois a migration2 será executada depois da migration1, logo vai dar erro, já que a migration2 ainda não foi executada.
*/