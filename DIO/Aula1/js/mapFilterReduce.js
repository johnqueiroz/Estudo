/*
    MAP COM THIS

const orange = {
    price: 1.5,
};
const apple = {
    price: 2,
};

function mapArray(){
    const array = [1,2,3,4,5,6];
    return array.map(function(item){
         return item * this.price}, orange);
}

console.log(mapArray());

*/

/*

        MAP SEM THIS

const ARRAY = [1,2,3,4,5,6];

console.log (ARRAY.map((item) => item * 2));

*/


/* 
        FILTER PARA NÚMEROS PARES
const array = [1,2,3,4,5,6];

console.log(array.filter((item) => 

item % 2 === 0 

)) */

/*          REDUCE PARA SOMAR
function listaPrecos(arr){
    if (!arr || !arr.length) return;

	const reduceArr = arr.reduce((ante, prox) => ante + prox);

	return reduceArr;
}

console.log(listaPrecos([1,2,3,4,5]));
*/

    /*      REDUCE PARA VER O PREÇO
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 0,
		nome: 'roupa',
	},
	{
		preco: 5,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));*/