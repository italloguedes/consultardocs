const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite'); // Use um arquivo físico

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    cpf TEXT PRIMARY KEY,
    name TEXT NOT NULL
  )`);
});

module.exports = db;
