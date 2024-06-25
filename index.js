const { Client } = require('pg');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configuração do cliente PostgreSQL
const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Apenas se necessário para conexões com SSL não autorizado
  }
});

// Conectar ao banco de dados Neon
client.connect()
  .then(() => {
    console.log('Connected to Neon PostgreSQL database');
  })
  .catch(err => {
    console.error('Error connecting to Neon PostgreSQL database:', err);
  });

// Exemplo de rota para consultar dados
app.get('/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error querying users:', err);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
