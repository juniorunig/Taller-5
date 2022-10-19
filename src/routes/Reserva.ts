import { Request, Response, Application, Router } from "express";

import { ReservasController } from "../Controllers/Reservas.controller";

export class ReservasRoutes {
  public reservaController: ReservasController = new ReservasController();

  public routes(app: Application): void {
    app.route("/reservas/test").get(this.reservaController.test);
    app.route("/reservas").get(this.reservaController.getAllReserva);
    app.route("/reservas").post(this.reservaController.createReservas);
    app.route("/reservas/:id").get(this.reservaController.getOneReservas);
    app.route("/reservas/:id").post(this.reservaController.updateReservas);
    app.route("/reservas/:id").delete(this.reservaController.deleteReservas);
  }
}
