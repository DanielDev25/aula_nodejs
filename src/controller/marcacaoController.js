const Funcionario = require("../model/funcionario");
const Marcacao = require("../model/marcacao");

function marcacoes (req, res){
    res.status(200);
    res.send({
      meta:{
        totalDeMaracacoes: 0,
        tipo:"marcação"
      },
      resultados: [],
    });
}

function adicionaMarcacao (req, res){
      console.log (req);
      let {login, senha} = req.body;
      let funcionario = new Funcionario('Daniel', '123');
      if  (funcionario.validar(login, senha)){
        let marcacao = new Marcacao('18:00:00', new Date());
        res.status(200);
        res.send(marcacao);
      }
      else{
        res.status(403);
        res.send('Login inválido');
      }
  
}

module.exports = {marcacoes, adicionaMarcacao}
