const express = require('express');
const bodyparser = require("body-parser")
const {listarFuncionarios} = require('./src/controller/funcionarioController')
<<<<<<< HEAD
const {marcacoes} = require('./src/controller/marcacaoController')
const {criarDia, listarDia} = require('./src/controller/diaController')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
=======
const {marcacoes, adicionaMarcacao} = require('./src/controller/marcacaoController')
const app = express();
app.use(bodyparser.json());
>>>>>>> 0738d22 (trabalhando com controllers)
const PORTA = 3000;

// rota ação GET: root (raiz) -> helloWorld()
app.get('/', helloWorld);

app.get('/health', mostrarHealth);

app.get('/funcionarios', listarFuncionarios)

app.get('/marcacoes', marcacoes)

// TODO: Adicionar rota para salvar funcionário

// TODO: Adiciona rota para marcação de ponto
app.post('/marcacoes', adicionaMarcacao)

// TODO: Adicionar rota para listagem de marcações por período

app.post('/dias', criarDia);

app.get('/dias', listarDia);


function helloWorld(req, res) {
  res.status(200);
  res.send('Hello World');
}

function mostrarHealth(req, res) {
  res.status(200);
  res.send({
    recurso: 2,
    pendentes: 4,
    mensagem: "Serviço incompleto. Aguarde atualização."
  });
}

app.listen(PORTA)
console.log("Serviço rodando na porta: ", PORTA);




