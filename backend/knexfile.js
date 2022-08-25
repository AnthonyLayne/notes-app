require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.HOST,
      user: process.env.PG_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    migrations: {
      directory: __dirname + "/data/migrations",
    },
    seeds: {
      directory: __dirname + "/data/seeds",
    },
  },
};
