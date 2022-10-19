import { Request, Response } from "express";
import { where } from "sequelize/types";

import { AgendasViajesI, AgendasViajes } from "../models/AgendasViajes";

export class AgendasController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para AgendasViajes");
    } catch (error) {}
  }

  public async getAllAgenda(req: Request, res: Response) {
    try {
      const agenda: AgendasViajesI[] = await AgendasViajes.findAll({}); // select * from AgendasViajess;
      res.status(200).json({ agenda });
    } catch (error) {}
  }

  public async createAgendasViajes(
    req: Request,

    res: Response
  ) {
    const { Nombre, Direccion, Telefono, Ciudad } = req.body;

    try {
      let body: AgendasViajesI = {
        Nombre,
        Direccion,
        Telefono,
        Ciudad,
      };

      const agendasViajes: AgendasViajesI = await AgendasViajes.create({
        ...body,
      });
      res.status(200).json({ agendasViajes });
    } catch (error) {}
  }

  public async getOneAgendasViajes(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const agendasViajes: AgendasViajesI | null = await AgendasViajes.findOne({
        where: {
          id: idParam,
        },
      });
      if (agendasViajes != null) {
        res.status(200).json(agendasViajes);
      } else return res.status(300).json({ msg: "El AgendasViajes no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateAgendasViajes(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, Nombre, Direccion, Telefono, Ciudad } = req.body;
    try {
      let body: AgendasViajesI = {
        Nombre,
        Direccion,
        Telefono,
        Ciudad,
      };
      const agendasViajesExist: AgendasViajesI | null =
        await AgendasViajes.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!agendasViajesExist)
        return res.status(500).json({ msg: "El AgendasViajes No existe" });
      await AgendasViajes.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const agendasViajes: AgendasViajesI | null = await AgendasViajes.findByPk(
      pk
    );
    if (agendasViajes) return res.status(200).json({ agendasViajes });
  }
  public async deleteAgendasViajes(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const AgendasViajesExist: AgendasViajesI | null =
        await AgendasViajes.findByPk(pk);
      if (!AgendasViajesExist)
        return res.status(500).json({ msg: "El AgendasViajes No existe" });
      await AgendasViajes.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "AgendasViajes Eliminado" });
    } catch (error) {}
  }
}
