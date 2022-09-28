
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class AgendasViajes extends Model {

  public Nombre!: string;
  public Direccion!: string;
  public Telefono!: number;
  public Ciudad!: string;
}

export interface AgendasViajesI {
   Nombre: string;
   Direccion: string;
   Telefono: number;
   Ciudad: string;
}

AgendasViajes.init(
  {
     Nombre: {
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
      Ciudad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  },
  {
    tableName: "AgendasViajes",
    sequelize: database,
    timestamps: true
  }
);
