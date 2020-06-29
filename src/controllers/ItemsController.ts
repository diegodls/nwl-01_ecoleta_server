import { Request, Response } from 'express'
import knex from '../database/connection'

import { IP_ADDRESS } from '../config/Network_IP';
class ItemsController {
    async index(request: Request, response: Response) {

        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `${IP_ADDRESS}/uploads/${item.image}`,
            };
        });


        return response.json(serializedItems);
    }
}

export default ItemsController;