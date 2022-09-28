
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Personas extends Model {

  public Cedula!: string;
  public Nombre!: string;
  public Apellido!: string;
  public Direccion!: string;
  public Telefono!: number;
}

export interface PersonasI {
     Cedula: string;
  Nombre: string;
  Apellido: string;
   Direccion: string;
  Telefono: number;
}

Personas.init(
  {
    Cedula: {
        type: DataTypes.STRING,
        allowNull: false
      },
     Nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Apellido: {
        type: DataTypes.STRING,
        allowNull: false
      },
     Direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  },
  {
    tableName: "Personas",
    sequelize: database,
    timestamps: true
  }
);
