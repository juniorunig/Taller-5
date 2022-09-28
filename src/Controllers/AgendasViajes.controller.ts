import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { AgendasViajesI, AgendasViajes} from '../models/AgendasViajes';

export class AgendasController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllAgenda(req: Request, res:Response){
        try {
            const agenda: AgendasViajesI[] = await AgendasViajes.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({agenda})
        } catch (error) {

        }
    }
}
