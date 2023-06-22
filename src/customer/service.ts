import { sequelize } from '../config/sequelize';

const models = sequelize.models

export class CustomerService { 
  constructor() {}

  async find() {
    const res = await models.Customer.findAll();
    return res;
  }

  async findOne(id: number) {
    const res = await models.Customer.findByPk(id);
    return res;
  }

  async create(data: any) {
    const res = await models.Customer.create(data);
    return res;
  }

  async update(id: number, data: any) {
    const model = await this.findOne(id);
    if (model) {
      const res = await model.update(data);
      return res;
    }
    return 'customer not found'
  }

  async delete(id: number) {
    const model = await this.findOne(id);
    if (model) {
      await model.destroy();
      return { deleted: true };
    }
    return 'customer not found'
  }

}
