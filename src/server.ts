import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem');

    response.json([
        'AAAAA',
        'BBBBB',
        'CCCCC',
        'DDDDD'
    ]);
});

app.listen(3333);