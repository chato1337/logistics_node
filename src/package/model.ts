import { Model, DataTypes, Sequelize } from "sequelize";

const PACKAGE_TABLE = "package"

export class Package extends Model {
    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: PACKAGE_TABLE,
            modelName: "Package",
            timestamps: true
        }
    }
}

export const PackageSchema = {
    id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	content: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "content",
	},
	weight: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "weight",
	},
	address_from: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "address_from",
	},
	address_to: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "address_to",
	},
	status: {
		allowNull: false,
		type: DataTypes.STRING,
		field: "status",
	},
}