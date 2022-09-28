import { Request, Response, Application, Router } from "express";

import { HabitacionesController } from '../Controllers/Habitacion.controller';

export class HbitacionesRoutes {
    public habitacionController: HabitacionesController =  new HabitacionesController();

    public routes(app: Application): void {
        app.route("/habitaciones/test").get(this.habitacionController.test)
        app.route("/habitaciones").get(this.habitacionController.getAllHabitacion)
    }
}
