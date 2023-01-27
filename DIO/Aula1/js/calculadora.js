function calculadora(){

    const tipoDeOperacao = Number(prompt("1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação \n 5 - Impar ou par"));
    // Apenas uma variável para definir o tipo de operação

    let primeiroNumero = Number(prompt("Digite o primeiro valor: "));
    let segundoNumero = Number(prompt("Digite o segundo valor: "));
    // Duas variáveis que recebem o primeiro e segundo valor para ser usado na conta.
    var resultado;
    
        function soma (){
            resultado = primeiroNumero + segundoNumero;
            // variável que soma os dois números.
            alert (`O resultado de ${primeiroNumero} + ${segundoNumero} é igual à: ${resultado}`);
            //alert para mostrar o resultado. O ${primeiroNumero} serve para mostrar a variável na mensagem, mas é preciso usar o "`" para que seja possível.
        }

        function subtracao() {
            resultado = primeiroNumero - segundoNumero;
            // variável que subtrai os dois números.
            alert(`O resultado de ${primeiroNumero} - ${segundoNumero} é igual à: ${resultado}`);
            //alert para mostrar o resultado. O ${primeiroNumero} serve para mostrar a variável na mensagem, mas é preciso usar o "`" para que seja possível.
        }

        function divisao(){
            resultado = primeiroNumero / segundoNumero;
            // variável que divide os dois números.
            alert(`O resultado de ${primeiroNumero} / por ${segundoNumero} é igual à: ${resultado}`);
            //alert para mostrar o resultado. O ${primeiroNumero} serve para mostrar a variável na mensagem, mas é preciso usar o "`" para que seja possível.
        }
        function multiplicacao(){
            resultado = primeiroNumero * segundoNumero;
             // variável que multiplica os dois números.
            alert(`O resultado de ${primeiroNumero} * ${segundoNumero} é igual à: ${resultado}`);
            //alert para mostrar o resultado. O ${primeiroNumero} serve para mostrar a variável na mensagem, mas é preciso usar o "`" para que seja possível.
        }

        function imparOuPar(){
            resultado = primeiroNumero + segundoNumero;
            let resultadoParOuImpar;

            if(resultado % 2 == 0){
                resultadoParOuImpar = "par"
            }else{
                resultadoParOuImpar = "impar"
            }
            
            alert (`O resultado de ${primeiroNumero} + ${segundoNumero} é igual à: ${resultado} e é ${resultadoParOuImpar}`);
        }
        switch(tipoDeOperacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                divisao();
                break;
            case 4:
                multiplicacao();
                break;  
            case 5:
                imparOuPar();
                break; 
        }


}  

//calculadora();

function forTeste(){

    const meuArray = [1,2,3,4,5,6,7,8,9,10];
   /*
    for(let i = 0; i <= meuArray.length; i++){
        console.log(meuArray[i]);
    }
*/
let i = 0;
while(i < meuArray.length){ 
   
   console.log(meuArray[i]);
   i++
}
}
forTeste();
