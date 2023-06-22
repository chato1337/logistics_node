import { Sequelize } from "sequelize";
import { Customer, CustomerSchema } from "./customer/model";
import { Delivery, DeliverySchema } from "./delivery/model";
import { Package, PackageSchema } from "./package/model";


export function setupModels(sequelize: Sequelize) {
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Delivery.init(DeliverySchema, Delivery.config(sequelize))
    Package.init(PackageSchema, Package.config(sequelize))

    //define relationships
    Delivery.belongsTo(Customer, {
        foreignKey: 'customerId'
    })

    Package.belongsTo(Delivery, {
        foreignKey: 'deliveryId'
    })
}