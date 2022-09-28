import { Request, Response, Application, Router } from "express";

import { PersonasController } from '../Controllers/Personas.controller';

export class PersonasRoutes {
    public personaController: PersonasController =  new PersonasController();

    public routes(app: Application): void {
        app.route("/personas/test").get(this.personaController.test)
        app.route("/personas").get(this.personaController.getAllPersona)
    }
}
