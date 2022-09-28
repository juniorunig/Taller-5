import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { ReservasI, Reservas} from '../models/Reservas';

export class ReservasController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllReserva(req: Request, res:Response){
        try {
            const reservas: ReservasI[] = await Reservas.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({Reservas})
        } catch (error) {

        }
    }
}
