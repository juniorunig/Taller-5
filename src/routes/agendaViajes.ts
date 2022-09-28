import { Request, Response, Application, Router } from "express";

import { AgendasController } from '../Controllers/AgendasViajes.controller';

export class AgendaRoutes {
    public agendaController: AgendasController =  new AgendasController();

    public routes(app: Application): void {
        app.route("/clientes/test").get(this.agendaController.test)
        app.route("/clientes").get(this.agendaController.getAllAgenda)
    }
}
