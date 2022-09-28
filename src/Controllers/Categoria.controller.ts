import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { CategoriaI, Categoria} from '../models/Categoria';

export class CategoriaController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllCategoria(req: Request, res:Response){
        try {
            const categoria: CategoriaI[] = await Categoria.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({categoria})
        } catch (error) {

        }
    }
}
