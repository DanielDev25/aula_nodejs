const { db } = require( "./dbConfig");
const format = require('date-format');

class Dia {
    
    constructor(dia){
        this.data = format.asString('ddMMyyyy', dia);
        this.marcacoes = [
            {
                tipo: E1,
                horaMarcada: null,

            }
        ];
    }

    adicionaMarcacao(marcacao, tipo = null){
        if (tipo === null){
            this.marcacoes.push(marcacao)    
        } else{
            this.marcacoes[tipo] = marcacao;
        }
        
    }

    calculaHoraTrabalhadas(){
        
    }
<<<<<<< HEAD
    async salva(){
        
        try{
            await db.push(TABLE+"[]", {
                data: this.data,
                marcacoes: this.marcacoes
            }, true);
        } catch(err){
            console.error('Falha ao salvar', err);
            throw new Error('Falha ao salvar', err);
        }
    }

    static async lista(){
        try{
            let resultado = await db.getData(TABLE);
            console.table(resultado);
            return resultado;
        } catch(err){
            console.error('Falha ao buscar', err);
            throw new Error('Falha ao buscar', err);
        }
    }
}

module.exports = Dia;
=======
}

>>>>>>> 0738d22 (trabalhando com controllers)
