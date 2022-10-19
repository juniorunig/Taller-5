import { Request, Response } from "express";
import { where } from "sequelize/types";

import { CategoriaI, Categoria } from "../models/Categoria";

export class CategoriaController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Cliente");
    } catch (error) {}
  }

  public async getAllCategoria(req: Request, res: Response) {
    try {
      const categoria: CategoriaI[] = await Categoria.findAll({}); // select * from clientes;
      res.status(200).json({ categoria });
    } catch (error) {}
  }

  public async createCategoria(
    req: Request,

    res: Response
  ) {
    const { Nivel, Iva, Descripcion } = req.body;

    try {
      let body: CategoriaI = {
        Nivel,
        Iva,
        Descripcion,
      };

      const categoria: CategoriaI = await Categoria.create({
        ...body,
      });
      res.status(200).json({ categoria });
    } catch (error) {}
  }

  public async getOneCategoria(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const categoria: CategoriaI | null = await Categoria.findOne({
        where: {
          id: idParam,
        },
      });
      if (categoria != null) {
        res.status(200).json(categoria);
      } else return res.status(300).json({ msg: "El Categoria no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateCategoria(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, Nivel, Iva, Descripcion } = req.body;
    try {
      let body: CategoriaI = {
        Nivel,
        Iva,
        Descripcion,
      };
      const CategoriaExist: CategoriaI | null = await Categoria.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!CategoriaExist)
        return res.status(500).json({ msg: "El Categoria No existe" });
      await Categoria.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const categoria: CategoriaI | null = await Categoria.findByPk(pk);
    if (categoria) return res.status(200).json({ categoria });
  }
  public async deleteCategoria(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const CategoriaExist: CategoriaI | null = await Categoria.findByPk(pk);
      if (!CategoriaExist)
        return res.status(500).json({ msg: "El Categoria No existe" });
      await Categoria.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Categoria Eliminado" });
    } catch (error) {}
  }
}
