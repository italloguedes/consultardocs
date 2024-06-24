const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE users (
    cpf TEXT PRIMARY KEY,
    name TEXT NOT NULL
  )`);
});

module.exports = db;
