/*

Métodos úteis de arrays
Além dos métodos básicos que já mencionamos anteriormente, como push, pop, shift e unshift, existem vários outros métodos úteis disponíveis para trabalhar com arrays em JavaScript. Aqui estão alguns exemplos:

*/

//concat: cria um novo array que contém os elementos de dois ou mais arrays combinados.


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let novoArray = array1.concat(array2, array3);
console.log(novoArray); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//join: cria uma nova string unindo todos os elementos de um array usando um separador especificado.


let meuArray = ['maçã', 'banana', 'laranja'];
let novaString = meuArray.join(', ');
console.log(novaString); // output: 'maçã, banana, laranja'
//slice: retorna uma cópia de parte de um array, sem modificar o array original.


let meuArray1 = ['a', 'b', 'c', 'd', 'e'];
let novoArray1 = meuArray1.slice(2, 4);
console.log(novoArray1); // output: ['c', 'd']
//sort: ordena os elementos de um array em ordem alfabética ou numérica.


let meuArray2 = [10, 5, 8, 3, 1];
meuArray2.sort();
console.log(meuArray2); // output: [1, 10, 3, 5, 8]
//reverse: inverte a ordem dos elementos de um array.


let meuArray3 = [1, 2, 3, 4, 5];
meuArray3.reverse();
console.log(meuArray3); // output: [5, 4, 3, 2, 1]
//indexOf: retorna o índice da primeira ocorrência de um determinado elemento em um array.


let meuArray4 = ['a', 'b', 'c', 'd', 'e'];
let indice1 = meuArray4.indexOf('c');
console.log(indice1); // output: 2
//lastIndexOf: retorna o índice da última ocorrência de um determinado elemento em um array.


let meuArray5 = ['a', 'b', 'c', 'd', 'c', 'e'];
let indice = meuArray5.lastIndexOf('c');
console.log(indice); // output: 4

/*
Esses são apenas alguns dos muitos métodos disponíveis para trabalhar com arrays em JavaScript. Vale a pena explorar a documentação oficial da linguagem para descobrir outros métodos úteis e aprender mais sobre como trabalhar com arrays em diferentes contextos.
*/