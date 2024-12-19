const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: "<role_name>",
  database: "inventory",
  password: "<role_password>",
  port: 5432 
});
