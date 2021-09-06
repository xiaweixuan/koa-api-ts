import { Sequelize } from 'sequelize';
import { database, host, user, password } from './config.json';

const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host,
  logging: false,
  timezone: '+08:00',
  define: {
    charset: 'utf8',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
})

// sequelize.sync();
sequelize.sync({ alter: true });
// sequelize.sync({ force: true });

export default sequelize;