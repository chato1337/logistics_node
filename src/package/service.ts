import { sequelize } from '../config/sequelize';

const models = sequelize.models

export class PackageService { 
  constructor() {}

  async find() {
    const res = await models.Package.findAll();
    return res;
  }

  async findOne(id: number) {
    const res = await models.Package.findByPk(id);
    return res;
  }

  async create(data: any) {
    const res = await models.Package.create(data);
    return res;
  }

  async update(id: number, data: any) {
    const model = await this.findOne(id);
    if (model) {
      const res = await model.update(data);
      return res;
    }
    return 'Package not found'
  }

  async delete(id: number) {
    const model = await this.findOne(id);
    if (model) {
      await model.destroy();
      return { deleted: true };
    }
    return 'Package not found'
  }

}
