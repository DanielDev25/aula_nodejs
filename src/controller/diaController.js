const Dia = require("../model/dia");

async function criarDia(req, res){
    try{
        let { data } = req.body;
        data = new Date(data);
        let candidato = new Dia(data);
        await candidato.salva();
        res.status(201);
        res.send();

    } catch (err){
        res.status(400);
        res.send({
            mensagem: "Falha ao criar dia:",
            erro: JSON.stringify(err)
        })
    }
}

async function listarDia(req, res){
    try{
        let dias = await Dia.lista();
        res.status(200);
        res.send(dias);
    }catch(err){
        res.status(500);
        res.send({
            mensagem: "Falha ao listar dias:",
            erro: JSON.stringify(err)
        });
        console.error(err)
    }
}

function apagarDia(id){

}

function atualizaDia(dia){

}

module.exports = {
    criarDia,
    listarDia
}