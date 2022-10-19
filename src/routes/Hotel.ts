import { Request, Response, Application, Router } from "express";

import { HotelesController } from "../Controllers/Hoteles.controller";

export class HotelesRoutes {
  public hotelController: HotelesController = new HotelesController();

  public routes(app: Application): void {
    app.route("/hoteles/test").get(this.hotelController.test);
    app.route("/hoteles").get(this.hotelController.getAllHotel);
    app.route("/hoteles").post(this.hotelController.createHoteles);
    app.route("/hoteles/:id").get(this.hotelController.getOneHoteles);
    app.route("/hoteles/:id").post(this.hotelController.updateHoteles);
    app.route("/hoteles/:id").delete(this.hotelController.deleteHoteles);
  }
}
