const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  local: {
    username: process.env.LOCAL_DB_USER_NAME,
    password: process.env.LOCAL_DB_SECRET,
    database: process.env.LOCAL_DB,
    host: process.env.LOCAL_DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    dialect: "postgres",
  },
  staging: {
    username: process.env.STAGE_DB_USER_NAME,
    password: process.env.STAGE_DB_SECRET,
    database: process.env.STAGE_DB,
    host: process.env.STAGE_DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    dialect: "postgres",
  },
  production: {
    username: process.env.PROD_DB_USER_NAME,
    password: process.env.PROD_DB_SECRET,
    database: process.env.PROD_DB,
    host: process.env.PROD_DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    dialect: "postgres",
  },
};