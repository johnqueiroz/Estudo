class contaBancaria{
    constructor(agencia, numero, tipo){
        
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){

        return "o saldo é de " + this._saldo + " reais";

        }

    set saldo(valor){
        if(valor < 0){
            this._saldo = 0;
        }else{
            this._saldo = valor;
            }
        }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada";
        }else{
            this._saldo = this._saldo - valor;
            
            return this._saldo;
        }
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
        }    
    

}


class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero, cartaoCredito);
        
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero ){
        super(agencia, numero);
        
        this.tipo = 'conta poupança';
      
    }

}


class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);

        this.tipo = 'conta universitaria';
        
    }


    sacar(valor){
        if(valor > 500){
            return "Operação negada";
        }else{
            this._saldo = this._saldo - valor;
            
            return this._saldo;
        }
    }

}
