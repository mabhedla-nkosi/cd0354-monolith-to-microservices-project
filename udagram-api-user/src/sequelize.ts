// import {Sequelize} from 'sequelize-typescript';
// import {config} from './config/config';

// const USERNAME = config.username.trim()
// const PASSWORD = config.password.trim()
// const HOST = config.host.trim()
// const DATABASE = config.database.trim()

// const sequelize = new Sequelize(`postgres://${USERNAME}:${PASSWORD}@${HOST}/${DATABASE}`);
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.\n')
//   })
//   .catch(function (err: any) {
//     console.error('Unable to connect to the database:', err);
//   })
//   export default sequelize

 //implemented this code by the help of Ademola Sobaki 
import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { config } from './config/config';

export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialect': config.dialect as Dialect,
  'storage': ':memory:',
});