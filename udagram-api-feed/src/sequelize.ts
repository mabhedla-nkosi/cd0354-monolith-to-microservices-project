// import {Sequelize} from 'sequelize-typescript';
// import {config} from './config/config';

// import { Dialect } from 'sequelize';

// const USERNAME = config.username.trim()
// const PASSWORD = config.password.trim()
// const HOST = config.host.trim()
// const DATABASE = config.database.trim()

// const sequelize = new Sequelize(`postgres://${USERNAME}:${PASSWORD}@${HOST}/${DATABASE}`);
// //Obtained this code from https://sequelize.org/docs/v6/getting-started/
// try{
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// }catch(error){
//   console.error('Unable to connect to the database:', error);
// }
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
