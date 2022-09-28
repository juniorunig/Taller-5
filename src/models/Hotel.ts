
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Hoteles extends Model {
  public Nombre!: string;
  public Direccion!: string;
  public fechaConstruccion!: Date;
}

export interface HotelesI {
     Nombre: string;
     Direccion: string;
     fechaConstruccion: Date;
}

Hoteles.init(
  {
     Nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
     Direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fechaConstruccion: {
        type: DataTypes.DATE,
        allowNull: false
      },
  },
  {
    tableName: "Hoteles",
    sequelize: database,
    timestamps: true
  }
);
