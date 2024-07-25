const Funcionario = require("../model/funcionario");

function listarFuncionarios(req, res){
    res.status(200);
    res.send({
      meta:{
        total : 1,
        tipo: "funcionário"
      },
      resultados: [criarFuncionario()],
    });
}

function criarFuncionario(){
      let funcionario = new Funcionario("Daniel", "123");
      return funcionario;
}

module.exports = {listarFuncionarios}