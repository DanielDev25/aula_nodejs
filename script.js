const express = require('express');
const bodyparser = require("body-parser")
const {listarFuncionarios} = require('./src/controller/funcionarioController')
const {marcacoes, adicionaMarcacao} = require('./src/controller/marcacaoController')
const app = express();
app.use(bodyparser.json());
const PORTA = 3000;

app.get('/', helloWorld);
// rota ação GET: root (raiz) -> helloWorld()

// TODO: Criar health
app.get('/health', mostrarHealth);

// TODO: Adicionar rota para obter funcionário
app.get('/funcionarios', listarFuncionarios)
// TODO: Adicionar rota para salvar funcionário

// TODO: Adiciona rota para marcação de ponto
app.post('/marcacoes', adicionaMarcacao)

// TODO: Adicionar rota para listagem de marcações
app.get('/marcacoes', marcacoes)
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




