document.getElementById('addUser').addEventListener('click', () => {
    const cpf = document.getElementById('cpf').value;
    const name = document.getElementById('name').value;
  
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cpf, name })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `Usuário adicionado com sucesso! ID: ${data.id}`;
    })
    .catch(error => {
      document.getElementById('result').innerText = `Erro ao adicionar usuário: ${error.message}`;
    });
  });
  
  document.getElementById('getUser').addEventListener('click', () => {
    const cpf = document.getElementById('cpf').value;
  
    fetch(`/user/${cpf}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        document.getElementById('result').innerText = `Usuário encontrado: CPF: ${data.cpf}, Nome: ${data.name}`;
      } else {
        document.getElementById('result').innerText = 'Usuário não encontrado';
      }
    })
    .catch(error => {
      document.getElementById('result').innerText = `Erro ao consultar usuário: ${error.message}`;
    });
  });
  