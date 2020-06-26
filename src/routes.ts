import express from 'express';
import multer from 'multer';

import multerConfig from '../src/config/multer'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points/:id', pointsController.show);
routes.get('/points/', pointsController.index);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;

/*
padrão para criação:
    index => listagem
    create/store => criar
    show => mostrar um registro
    update => atualizar
    delete/destroy => deletar
*/


/*

{	
	"name": "mercadão45",
	"email": "mercadão@gmail.com",
	"whatsapp": "169999999",
	"latitude": "-21.189585",
	"longitude": "-48.151760",
	"city": "São Paulo",
	"uf": "SP",
	"items": [
		4,5
	]
}

*/