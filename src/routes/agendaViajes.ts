import { Request, Response, Application, Router } from "express";

import { AgendasController } from "../Controllers/AgendasViajes.controller";

export class AgendaRoutes {
  public agendaController: AgendasController = new AgendasController();

  public routes(app: Application): void {
    app.route("/agendas/test").get(this.agendaController.test);
    app.route("/agendas").get(this.agendaController.getAllAgenda);
    app.route("/agendas").post(this.agendaController.createAgendasViajes);
    app.route("/agendas/:id").get(this.agendaController.getOneAgendasViajes);
    app.route("/agendas/:id").post(this.agendaController.updateAgendasViajes);
    app.route("/agendas/:id").delete(this.agendaController.deleteAgendasViajes);
  }
}
