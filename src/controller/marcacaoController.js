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
module.exports = {marcacoes}