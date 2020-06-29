import express, { request } from 'express';
import path from 'path'
import routes from './routes'
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json()); //usado para que o express entenda que estamos trabalhando com JSON, não vem por padrão.
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/img_uploads', express.static(path.resolve(__dirname, '..', 'uploads', 'img_uploads')));
app.use(errors());

app.listen(3333);

/*
GET: Busca uma ou mais informações.
POST: Criar uma nova informação.
PUT: Atualizar uma informação.
DELETE: Remover uma informação.
Request Param: paramêtros que vem na própria rota
Query Param: paramêtros que vem na própria rota geralmente opcionais para filtros (search, paginação, etc...).
Request Body: paramêtros para criação/atualização.

===Knex
SELECT * FROM users WHERE name = 'NOME'
knex('users').where('name', 'NOME').select('*')

- "express.static()" serve para "servir" arquivos estaticos
*/