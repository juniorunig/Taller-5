import { Request, Response } from "express";
import { where } from "sequelize/types";

import { HabitacionI, Habitacion } from "../models/Habitaciones";

export class HabitacionesController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Cliente");
    } catch (error) {}
  }

  public async getAllHabitacion(req: Request, res: Response) {
    try {
      const habitacio: HabitacionI[] = await Habitacion.findAll({}); // select * from clientes;
      res.status(200).json({ habitacio });
    } catch (error) {}
  }

  public async createHabitacion(
    req: Request,

    res: Response
  ) {
    const { CodigoHabitacion, TipoHabitacion } = req.body;

    try {
      let body: HabitacionI = {
        CodigoHabitacion,
        TipoHabitacion,
      };

      const habitacion: HabitacionI = await Habitacion.create({
        ...body,
      });
      res.status(200).json({ habitacion });
    } catch (error) {}
  }

  public async getOneHabitacion(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const habitacion: HabitacionI | null = await Habitacion.findOne({
        where: {
          id: idParam,
        },
      });
      if (habitacion != null) {
        res.status(200).json(habitacion);
      } else return res.status(300).json({ msg: "El Habitacion no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateHabitacion(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, CodigoHabitacion, TipoHabitacion } = req.body;
    try {
      let body: HabitacionI = {
        CodigoHabitacion,
        TipoHabitacion,
      };
      const HabitacionExist: HabitacionI | null = await Habitacion.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!HabitacionExist)
        return res.status(500).json({ msg: "El Habitacion No existe" });
      await Habitacion.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const habitacion: HabitacionI | null = await Habitacion.findByPk(pk);
    if (habitacion) return res.status(200).json({ habitacion });
  }
  public async deleteHabitacion(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const HabitacionExist: HabitacionI | null = await Habitacion.findByPk(pk);
      if (!HabitacionExist)
        return res.status(500).json({ msg: "El Habitacion No existe" });
      await Habitacion.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Habitacion Eliminado" });
    } catch (error) {}
  }
}
