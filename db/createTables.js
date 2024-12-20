const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_id INTEGER,
  name VARCHAR ( 255 ),
  description VARCHAR ( 10000 ),
  image_src VARCHAR ( 10000 ),
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: "localhost",
    user: "prabjotsingh",
    database: "inventory",
    password: "<role_password>",
    port: 5432,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
