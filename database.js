const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o arquivo do banco de dados SQLite
const dbPath = path.resolve(__dirname, 'database.sqlite');

// Cria uma instância do banco de dados SQLite
const db = new sqlite3.Database(dbPath);

// Cria a tabela 'users' se ela ainda não existir
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    cpf TEXT PRIMARY KEY,
    name TEXT NOT NULL
  )`);
});

module.exports = db;
