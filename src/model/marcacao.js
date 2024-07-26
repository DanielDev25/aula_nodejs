class Marcacao {
    horaMarcada;
    horaPadrao;
    constructor(horaFeita = new Date()){
        this.horaMarcada = horaFeita;
        this.horaPadrao = horaEsperada;

    }

    horaEfetiva(){
        // TODO: Implementar método para calcular horas exatas.
    }
}

module.exports = Marcacao;