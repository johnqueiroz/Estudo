
  //  var array = [1, 2, 3, "teste", ["array1", "array2"], ["array 3", "array4"]];
    //console.log(array);

    //array.forEach(function(item, index){console.log(item, index)})

  /*  array.push("add item");
    console.log(array);*/
/*
    array.pop();
   

    array.shift(); 
    
    array.unshift("add item no começo");

    console.log(array.indexOf(false));*/
function calculadora(){
  const tipo_conta = Number(prompt("Escolha um tipo de conta \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"));

    var n1 = Number(prompt("Digite o primeiro valor: "));
    var n2 = Number(prompt("Digite o segundo valor: "));
    var resultado; 
    
    function checa_igualdade(){
      n1 == n2 ? alert("Os números são iguais!") : alert("Os números são diferentes");
    }


    function NovaOperacao(){

      const novaOperacao = Number(prompt("Escolha um tipo de conta caso deseja fazer uma nova operacao \n 1 - Fazer operação \n 0 - Sair"));
      
      if(novaOperacao == 0){
        alert("Até mais!");
     }else if(novaOperacao == 1){
       return calculadora();
     }else{
       console.log("Erro");
     }
    } 


    function soma(){
     resultado = n1 + n2;
      alert(`O resultado de ${n1} + ${n2} = ${resultado}`);
      checa_igualdade();

       resultado >= 20 ? alert("Sua soma é maior ou igual a 20") : alert("Sua soma é menor que 20");
       resultado <= 10 ? alert("Sua soma é menor ou igual a 10") : alert("Sua soma é maior que 10");

      NovaOperacao();
    }
    function subtracao(){
      resultado = n1 - n2;
      alert(`O resultado de ${n1} - ${n2} = ${resultado}`);
      checa_igualdade();
      NovaOperacao();
    }
    function multiplicacao(){
      resultado = n1 * n2;
      alert(`O resultado de ${n1} * ${n2} = ${resultado}`);
      checa_igualdade();
      NovaOperacao();
    }
    function divisao(){
      resultado = n1 / n2;
      alert(`O resultado de ${n1} / ${n2} = ${resultado}`);
      checa_igualdade();
      NovaOperacao();
    }

    switch(tipo_conta){
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisao();
        break;

    }
   
  }
  calculadora();
