import { Request, Response, Application, Router } from "express";

import { CategoriaController } from '../Controllers/Categoria.controller';

export class CategoriasRoutes {
    public categoriaController: CategoriaController =  new CategoriaController();

    public routes(app: Application): void {
        app.route("/categorias/test").get(this.categoriaController.test)
        app.route("/categorias").get(this.categoriaController.getAllCategoria)
    }
}
