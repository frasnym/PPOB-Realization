import * as sequelize from 'sequelize';
import { UserFactory } from '../models/user-model';
import { OrderFactory } from '../models/order-model';

if (!process.env.POSTGRES_DB) {
    throw new Error('POSTGRES_DB must be defined');
}
if (!process.env.POSTGRES_USER) {
    throw new Error('POSTGRES_USER must be defined');
}
if (!process.env.POSTGRES_LOCAL_PORT) {
    throw new Error('POSTGRES_LOCAL_PORT must be defined');
}

export const dbConfig = new sequelize.Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: (process.env.POSTGRES_LOCAL_PORT as unknown) as number,
        logging: false,
    }
);

export const User = UserFactory(dbConfig);
export const Order = OrderFactory(dbConfig);

Order.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
});
