import { Request, Response } from "express";
import { where } from "sequelize/types";

import { HotelesI, Hoteles } from "../models/Hotel";

export class HotelesController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Cliente");
    } catch (error) {}
  }

  public async getAllHotel(req: Request, res: Response) {
    try {
      const hoteles: HotelesI[] = await Hoteles.findAll({}); // select * from clientes;
      res.status(200).json({ hoteles });
    } catch (error) {}
  }

  public async createHoteles(
    req: Request,

    res: Response
  ) {
    const { Nombre, Direccion, fechaConstruccion } = req.body;

    try {
      let body: HotelesI = {
        Nombre,
        Direccion,
        fechaConstruccion,
      };

      const hoteles: HotelesI = await Hoteles.create({
        ...body,
      });
      res.status(200).json({ hoteles });
    } catch (error) {}
  }

  public async getOneHoteles(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const hoteles: HotelesI | null = await Hoteles.findOne({
        where: {
          id: idParam,
        },
      });
      if (hoteles != null) {
        res.status(200).json(hoteles);
      } else return res.status(300).json({ msg: "El Hoteles no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateHoteles(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, Nombre, Direccion, fechaConstruccion } = req.body;
    try {
      let body: HotelesI = {
        Nombre,
        Direccion,
        fechaConstruccion,
      };
      const HotelesExist: HotelesI | null = await Hoteles.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!HotelesExist)
        return res.status(500).json({ msg: "El Hoteles No existe" });
      await Hoteles.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const hoteles: HotelesI | null = await Hoteles.findByPk(pk);
    if (hoteles) return res.status(200).json({ hoteles });
  }
  public async deleteHoteles(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const HotelesExist: HotelesI | null = await Hoteles.findByPk(pk);
      if (!HotelesExist)
        return res.status(500).json({ msg: "El Hoteles No existe" });
      await Hoteles.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Hoteles Eliminado" });
    } catch (error) {}
  }
}
