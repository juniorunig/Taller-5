 
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Reservas extends Model {

  public NumeroReserva!: number;
  public FechaIngreso!: Date;
  public FechaSalida!: Date;
  public HoraIngreso!: Date;
 
}

export interface ReservasI {
     NumeroReserva: number;
     FechaIngreso: Date;
     FechaSalida: Date;
     HoraIngreso: Date;
}

Reservas.init(
  {
    NumeroReserva: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
     FechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false
      },
      FechaSalida: {
        type: DataTypes.DATE,
        allowNull: false
      },
      HoraIngreso: {
        type: DataTypes.TIME,
        allowNull: false
      },
  },
  {
    tableName: "Reservass",
    sequelize: database,
    timestamps: true
  }
);
