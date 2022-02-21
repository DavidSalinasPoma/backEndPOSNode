import { Sequelize } from 'sequelize';

const db = new Sequelize('nodepos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging:false
});

export default db;
