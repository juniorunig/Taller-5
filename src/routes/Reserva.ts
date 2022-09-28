import { Request, Response, Application, Router } from "express";

import { ReservasController } from '../Controllers/Reservas.controller';

export class ReservasRoutes {
    public reservaController: ReservasController =  new ReservasController();

    public routes(app: Application): void {
        app.route("/reservas/test").get(this.reservaController.test)
        app.route("/reservas").get(this.reservaController.getAllReserva)
    }
}
