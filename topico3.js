//Adicionando e removendo elementos em um array
//Em JavaScript, podemos adicionar e remover elementos em um array usando alguns métodos específicos. Vamos ver alguns exemplos:

//3.1 Adicionando elementos:

//.push(): adiciona um elemento ao final do array.


let meuArray = ['maçã', 'banana', 'laranja'];
meuArray.push('uva');

console.log(meuArray); // output: ['maçã', 'banana', 'laranja', 'uva']


//.unshift(): adiciona um elemento ao início do array.


let meuArray1 = ['maçã', 'banana', 'laranja'];
meuArray1.unshift('uva');

console.log(meuArray1); // output: ['uva', 'maçã', 'banana', 'laranja']


//.splice(): adiciona um ou mais elementos em qualquer posição do array.


let meuArray2 = ['maçã', 'banana', 'laranja'];
meuArray2.splice(1, 0, 'uva');
console.log(meuArray2); // output: ['maçã', 'uva', 'banana', 'laranja']


//3.2 Removendo elementos:

//.pop(): remove o último elemento do array.


let meuArray3 = ['maçã', 'banana', 'laranja'];
meuArray3.pop();
console.log(meuArray3); // output: ['maçã', 'banana']


//.shift(): remove o primeiro elemento do array.


let meuArray4 = ['maçã', 'banana', 'laranja'];
meuArray4.shift();
console.log(meuArray4); // output: ['banana', 'laranja']

//.splice(): remove um ou mais elementos de qualquer posição do array.


//A função splice()tbm pode ser utilizada para remover um elemento

let meuArray5= ['maçã', 'banana', 'laranja'];
meuArray5.splice(1, 1);
console.log(meuArray5); // output: ['maçã', 'laranja']
