const express = require('express');
const db = require('./database');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rota para consultar um usuário pelo CPF
app.get('/user/:cpf', (req, res) => {
  const cpf = req.params.cpf;
  db.get('SELECT * FROM users WHERE cpf = ?', [cpf], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

// Rota para adicionar um novo usuário
app.post('/user', (req, res) => {
  const { cpf, name } = req.body;
  db.run('INSERT INTO users (cpf, name) VALUES (?, ?)', [cpf, name], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
