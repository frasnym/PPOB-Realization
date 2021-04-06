import express, { Application } from 'express';
import { dbConfig } from './db/sequelize';

export function expressApp() {
    dbConfig
        .sync()
        .then(() =>
            console.log('Sequelize: All models were synchronized successfully')
        )
        .catch(() => {
            throw 'error';
        });
    const app: Application = express();

    if (process.env.NODE_ENV === 'production') {
        // app.use(require('helmet')());
        // app.use(require('compression')());
    }

    app.use(express.json());

    return app;
}
