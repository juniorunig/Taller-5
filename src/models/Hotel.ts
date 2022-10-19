
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { AgendasViajes } from "./AgendasViajes";
import { Categoria } from "./Categoria";
import { Habitacion } from "./Habitaciones";
import { Personas } from "./Personas";
import { Reservas } from "./Reservas";

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

Categoria.hasMany(Hoteles, {foreignKey: 'categoria_id'})
Hoteles.belongsTo(Categoria, {foreignKey: 'categoria_id'})

Hoteles.hasMany(Habitacion, {foreignKey: 'hotel_id'})
Habitacion.belongsTo(Hoteles,  {foreignKey: 'hotel_id'})

Hoteles.hasMany(Reservas)
Personas.hasMany(Reservas)
AgendasViajes.hasMany(Reservas)

Reservas.belongsTo(Personas)
Reservas.belongsTo(AgendasViajes)