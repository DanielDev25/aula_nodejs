function listarFuncionarios(req, res){
    res.status(200);
    res.send({
      meta:{
        total : 0,
        tipo: "funcionário"
      },
      resultados: [],
    });
}
module.exports = {listarFuncionarios}