class Funcionario {
    login = "";
    senha = "";

    constructor (login, senha){
        this.login = login;
        this.senha = senha
    }

    validar (login, senha){
        if (login == this.login && senha == this.senha)
            return true;
        else{ return false};
    } 
}

module.exports = Funcionario;