class Marcacao {
    horaMarcada;
    horaPadrao;
    constructor(horaEsperada, horaFeita = new Date()){
        this.horaMarcada = horaFeita;
        this.horaPadrao = horaEsperada;

    }
}

module.exports = Marcacao;