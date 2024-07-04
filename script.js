class Marcacao {
    horaMarcada;
    horaPadrao;
    constructor(horaEsperada, horaFeita = new Date()){
        this.horaMarcada = horaFeita;
        this.horaPadrao = horaEsperada;

    }
}

class Dia {
    horasMarcadas = [];
    adicionaMarcacao(marcacao){
        this.horasMarcadas.push(marcacao)
    }

    calculaHoraTrabalhadas(){
        
    }
}