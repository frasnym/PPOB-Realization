require('dotenv').config();
import { expressApp } from './app';

const PORT = process.env.NODEJS_LOCAL_PORT || 3000;

const app = expressApp();
app.listen(PORT, () => {
    console.log(`Worker: process ${process.pid} is up on port ${PORT}`);
});
