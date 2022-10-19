import { Request, Response } from "express";
import { where } from "sequelize/types";

import { PersonasI, Personas } from "../models/Personas";

export class PersonasController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Persona");
    } catch (error) {}
  }

  public async getAllPersona(req: Request, res: Response) {
    try {
      const personas: PersonasI[] = await Personas.findAll({}); // select * from clientes;
      res.status(200).json({ personas });
    } catch (error) {}
  }

  public async createPersonas(
    req: Request,

    res: Response
  ) {
    const { Cedula, Nombre, Apellido, Direccion, Telefono } = req.body;

    try {
      let body: PersonasI = {
        Cedula,
        Nombre,
        Apellido,
        Direccion,
        Telefono,
      };

      const personas: PersonasI = await Personas.create({
        ...body,
      });
      res.status(200).json({ personas });
    } catch (error) {}
  }

  public async getOnePersonas(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const personas: PersonasI | null = await Personas.findOne({
        where: {
          id: idParam,
        },
      });
      if (personas != null) {
        res.status(200).json(personas);
      } else return res.status(300).json({ msg: "El Personas no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updatePersonas(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, Cedula, Nombre, Apellido, Direccion, Telefono } = req.body;
    try {
      let body: PersonasI = {
        Cedula,
        Nombre,
        Apellido,
        Direccion,
        Telefono,
      };
      const PersonasExist: PersonasI | null = await Personas.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!PersonasExist)
        return res.status(500).json({ msg: "El Personas No existe" });
      await Personas.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const personas: PersonasI | null = await Personas.findByPk(pk);
    if (personas) return res.status(200).json({ personas });
  }
  public async deletePersonas(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const PersonasExist: PersonasI | null = await Personas.findByPk(pk);
      if (!PersonasExist)
        return res.status(500).json({ msg: "El Personas No existe" });
      await Personas.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Persona Eliminado" });
    } catch (error) {}
  }
}
