import { Sequelize } from 'sequelize';
import { setupModels } from '../models';
import { config } from './app.config';

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'mysql'
    }
)

sequelize.sync()

setupModels(sequelize)

export { sequelize }