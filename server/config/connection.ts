require('dotenv').config();
// import * as dotenv from 'dotenv';
// require('dotenv').config({ path: __dirname+'/.env' })
// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname+'/.env' });

// const Sequelize = require('sequelize-typescript');
import { Sequelize } from 'sequelize-typescript'

const sequelize = () => {
  const sequelize = 
  // process.env.JAWSDB_URL
  //   ? new Sequelize(process.env.JAWSDB_URL)
    // : 
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        repositoryMode: true,
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      });

  return sequelize;
}

export default sequelize;