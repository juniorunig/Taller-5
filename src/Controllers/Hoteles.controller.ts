 
import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { HotelesI, Hoteles} from '../models/Hotel';

export class HotelesController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllHotel(req: Request, res:Response){
        try {
            const hoteles: HotelesI[] = await Hoteles.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({hoteles})
        } catch (error) {

        }
    }
}
