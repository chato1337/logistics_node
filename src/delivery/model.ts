import { Model, DataTypes, Sequelize } from "sequelize";


const DELIVERY_TABLE = "delivery"

export class Delivery extends Model {
    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: DELIVERY_TABLE,
            modelName: "Delivery",
            timestamps: true
        }
    }
}

export const DeliverySchema = {
    id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
    type_vehicle: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "type_vehicle",
	},
	phone: {
		allowNull: true,
		type: DataTypes.INTEGER,
		field: "phone",
	},
}