import { BuildOptions, Model } from 'sequelize';

export interface UserAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
    pin: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}
export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};

export interface OrderAttributes {
    id: number;
    invoce: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface OrderModel extends Model<OrderAttributes>, OrderAttributes {}
export class Order extends Model<OrderModel, OrderAttributes> {}
export type OrderStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): OrderModel;
};
