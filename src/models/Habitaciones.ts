 
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Habitacion extends Model {
  public CodigoHabitacion!: number;
  public TipoHabitacion!: string;
}

export interface HabitacionI{
  CodigoHabitacion: number;
     TipoHabitacion: string;
}

Habitacion.init(
  {
     CodigoHabitacion: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
     TipoHabitacion: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    tableName: "Habitacion",
    sequelize: database,
    timestamps: true
  }
);
