// const Pool = require("pg").Pool;
require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PASSWORD,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   port: process.env.PORT,
//   connection: process.env.URI,
// };

// const pool = new Pool(devConfig);

// module.exports = pool;
const knex = require("knex");
const configurations = require("../knexfile");
const environment = process.env.NODE_ENV;

module.exports = knex(configurations[environment]);
