function verfArray(arr, num){
    try{

        if(!arr && !num)  throw new ReferenceError("Envie os parâmetros");
    
        if(typeof arr !== 'object') throw new TypeError("Envie um array em formato de objeto");
    
        if(typeof num !== 'number') throw new TypeError("Envie um número do tipo Number");
    
        if(arr.length !== num) throw new RangeError ("Tamanho inválido");
    
        return arr;
    }

catch(e){

    if (e instanceof ReferenceError){
            console.log("Este é um erro de referencia");
            console.log(e.message);

    }else if (e instanceof TypeError){
        console.log("Este é um erro de Tipo");
        console.log(e.message);

    }else if (e instanceof RangeError){
        console.log("Este é um erro de Tamanho");
        console.log(e.message);
        }else{
            console.log('Tipo de erro não esperado' + e);
        }
    }
}

console.log(verfArray([] , 5));