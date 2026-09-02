const dotenv = require("dotenv");
dotenv.config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user VARCHAR ( 255 ), text VARCHAR (255)
);

INSERT INTO messages (user, text) 
VALUES
  ('Bryan', 'Hello World!),
  ('Odin', 'I'm the god!'),
  ('Damon', 'I'm not a god, damit');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
