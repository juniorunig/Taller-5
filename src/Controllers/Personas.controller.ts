import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { PersonasI, Personas} from '../models/Personas';

export class PersonasController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllPersona(req: Request, res:Response){
        try {
            const personas: PersonasI[] = await Personas.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({personas})
        } catch (error) {

        }
    }
}
