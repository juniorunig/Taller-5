import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Categoria extends Model {
  public Nivel!: string;
  public Iva!: number;
  public Descripcion!: string;
}

export interface CategoriaI {
     Nivel: string;
     Iva: number;
     Descripcion: string;
}

Categoria.init(
  {
    Nivel: {
      type: DataTypes.STRING,
      allowNull: false
    },
     
     Iva: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      Descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    tableName: "Categoria",
    sequelize: database,
    timestamps: true
  }
);



