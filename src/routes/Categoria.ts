import { Request, Response, Application, Router } from "express";

import { CategoriaController } from "../Controllers/Categoria.controller";

export class CategoriasRoutes {
  public categoriaController: CategoriaController = new CategoriaController();

  public routes(app: Application): void {
    app.route("/categorias/test").get(this.categoriaController.test);
    app.route("/categorias").get(this.categoriaController.getAllCategoria);
    app.route("/categorias").post(this.categoriaController.createCategoria);
    app.route("/categorias/:id").get(this.categoriaController.getOneCategoria);
    app.route("/categorias/:id").post(this.categoriaController.updateCategoria);
    app
      .route("/categorias/:id")
      .delete(this.categoriaController.deleteCategoria);
  }
}
