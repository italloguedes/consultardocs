const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Use o caminho absoluto para o arquivo do banco de dados
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    cpf TEXT PRIMARY KEY,
    name TEXT NOT NULL
  )`);
});

module.exports = db;
