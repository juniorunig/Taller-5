import { Request, Response, Application, Router } from "express";

import { HotelesController } from '../Controllers/Hoteles.controller';

export class HotelesRoutes {
    public hotelController: HotelesController =  new HotelesController();

    public routes(app: Application): void {
        app.route("/hoteles/test").get(this.hotelController.test)
        app.route("/hoteles").get(this.hotelController.getAllHotel)
    }
}
