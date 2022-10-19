import { Request, Response, Application, Router } from "express";

import { PersonasController } from "../Controllers/Personas.controller";

export class PersonasRoutes {
  public personaController: PersonasController = new PersonasController();

  public routes(app: Application): void {
    app.route("/personas/test").get(this.personaController.test);
    app.route("/personas").get(this.personaController.getAllPersona);
    app.route("/personas").post(this.personaController.createPersonas);
    app.route("/personas/:id").get(this.personaController.getOnePersonas);
    app.route("/personas/:id").post(this.personaController.updatePersonas);
    app.route("/personas/:id").delete(this.personaController.deletePersonas);
  }
}
