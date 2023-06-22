import { sequelize } from '../config/sequelize';

const models = sequelize.models

export class DeliveryService { 
  constructor() {}

  async find() {
    const res = await models.Delivery.findAll();
    return res;
  }

  async findOne(id: string) {
    const res = await models.Delivery.findByPk(id);
    return res;
  }

  async create(data: any) {
    const res = await models.Delivery.create(data);
    return res;
  }

  async update(id: string, data: any) {
    const model = await this.findOne(id);
    if (model) {
      const res = await model.update(data);
      return res;
    }
    return 'delivery not found'
  }

  async delete(id: string) {
    const model = await this.findOne(id);
    if (model) {
      await model.destroy();
      return { deleted: true };
    }
    return 'delivery not found'
  }

}
