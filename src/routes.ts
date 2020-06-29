import express from 'express'; //conexão
import multer from 'multer'; //upload
import { celebrate, Joi } from 'celebrate';//validação

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

routes.post(
	'/points',
	upload.single('image'),
	celebrate({//validação dos campos
		body: Joi.object().keys({
			name: Joi.string().required(),
			email: Joi.string().required().email(),
			whatsapp: Joi.number().required(),
			latitude: Joi.number().required(),
			longitude: Joi.number().required(),
			city: Joi.string().required(),
			uf: Joi.string().required().max(2),
			items: Joi.string().required(), //usar .regex() para separar os itens por virgula
			//para validar a imagem, usar o multer
		})
	}, {
		abortEarly: false
	}),
	pointsController.create
);

export default routes;

/*
padrão para criação:
    index => listagem
    create/store => criar
    show => mostrar um registro
    update => atualizar
    delete/destroy => deletar
*/