import { Model, DataTypes, Sequelize } from "sequelize";

const CUSTOMER_TABLE = "customer";

export class Customer extends Model {
	static config(sequelize: Sequelize) {
		return {
			sequelize,
			tableName: CUSTOMER_TABLE,
			modelName: "Customer",
			timestamps: true,
		};
	}
}

export const CustomerSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "name",
	},
	address: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "address",
	},
	phone: {
		allowNull: true,
		type: DataTypes.INTEGER,
		field: "phone",
	},
};

