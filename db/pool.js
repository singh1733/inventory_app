const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: "prabjotsingh",
  database: "inventory",
  password: "<role_password>",
  port: 5432 
});
