class Marcacao {
    static TIPO = {
        e1: 9,
        s1: 12,
        e2: 13,
        s2: 18
    }
    static TOLERANCIA = 900000; // 15 minutos em milissegundos

    constructor(horaEsperada, horaFeita = new Date()){
        this.horaMarcada = horaFeita;
        this.horaPadrao = new Date(new Date().setHours(horaEsperada,0,0));
    }
    horaEfetiva(){
        if (this.horaMarcada - TOLERANCIA > this.horaPadrao && this.horaMarcada + TOLERANCIA < this.horaPadrao){
            return new Date(this.horaPadrao);
        } else {
            return this.horaMarcada;
        }
    }
}

module.exports = Marcacao;


let m = new Marcacao(Marcacao.TIPO.s2);
console.log(m.horaPadrao, m.horaMarcada);
