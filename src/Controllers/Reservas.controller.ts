import { Request, Response } from "express";
import { where } from "sequelize/types";

import { ReservasI, Reservas } from "../models/Reservas";

export class ReservasController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Cliente");
    } catch (error) {}
  }

  public async getAllReserva(req: Request, res: Response) {
    try {
      const reservas: ReservasI[] = await Reservas.findAll({}); // select * from clientes;
      res.status(200).json({ Reservas });
    } catch (error) {}
  }

  public async createReservas(
    req: Request,

    res: Response
  ) {
    const { NumeroReserva, FechaIngreso, FechaSalida, HoraIngreso } = req.body;

    try {
      let body: ReservasI = {
        NumeroReserva,
        FechaIngreso,
        FechaSalida,
        HoraIngreso,
      };

      const reservas: ReservasI = await Reservas.create({
        ...body,
      });
      res.status(200).json({ Reservas });
    } catch (error) {}
  }

  public async getOneReservas(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const reservas: ReservasI | null = await Reservas.findOne({
        where: {
          id: idParam,
        },
      });
      if (reservas != null) {
        res.status(200).json(reservas);
      } else return res.status(300).json({ msg: "El Reservas no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateReservas(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, NumeroReserva, FechaIngreso, FechaSalida, HoraIngreso } =
      req.body;
    try {
      let body: ReservasI = {
        NumeroReserva,
        FechaIngreso,
        FechaSalida,
        HoraIngreso,
      };
      const ReservasExist: ReservasI | null = await Reservas.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!ReservasExist)
        return res.status(500).json({ msg: "El Reservas No existe" });
      await Reservas.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const reservas: ReservasI | null = await Reservas.findByPk(pk);
    if (reservas) return res.status(200).json({ reservas });
  }

  public async deleteReservas(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const ReservasExist: ReservasI | null = await Reservas.findByPk(pk);
      if (!ReservasExist)
        return res.status(500).json({ msg: "El Reservas No existe" });
      await Reservas.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Persona Eliminado" });
    } catch (error) {}
  }
}
