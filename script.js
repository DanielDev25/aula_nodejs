const express = require('express');
const app = express();
const PORTA = 3000;

app.get('/', helloWorld);
// rota ação GET: root (raiz) -> helloWorld()

// TODO: Criar health
app.get('/health', mostrarHealth);

// TODO: Adicionar rota para obter funcionário

// TODO: Adicionar rota para salvar funcionário

// TODO: Adiciona rota para marcação de ponto

// TODO: Adicionar rota para listagem de marcações

// TODO: Adicionar rota para listagem de marcações por período


function helloWorld(req, res) {
  res.status(200);
  res.send('Hello World');
}

function mostrarHealth(req, res) {
  res.status(200);
  res.send({
    recurso: 1,
    pendentes: 5,
    mensagem: "Serviço incompleto. Aguarde atualização."
  });
}

app.listen(PORTA)
console.log("Serviço rodando na porta: ", PORTA);