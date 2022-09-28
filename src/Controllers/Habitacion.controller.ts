 
import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { HabitacionI, Habitacion} from '../models/Habitaciones';

export class HabitacionesController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllHabitacion(req: Request, res:Response){
        try {
            const habitacio: HabitacionI[] = await Habitacion.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({habitacio})
        } catch (error) {

        }
    }
}
