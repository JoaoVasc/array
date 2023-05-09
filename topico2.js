/*
Acessando valores em um array e a propriedade .length
Uma vez que um array é criado, podemos acessar seus valores usando seu índice numérico correspondente. Por exemplo, para acessar o terceiro elemento em um array, usamos o índice 2:

*/

let meuArray = ['maçã', 'banana', 'laranja', 'uva'];
console.log(meuArray[2]); // output: laranja


//Também podemos acessar o último elemento em um array usando o índice length-1:



let meuArray2 = ['maçã', 'banana', 'laranja', 'uva'];
console.log(meuArray[meuArray.length-1]); // output: uva

//Além disso, podemos usar a propriedade .length de um array para saber quantos elementos ele contém:



let meuArray3 = ['maçã', 'banana', 'laranja', 'uva'];
console.log(meuArray.length); // output: 4


//A propriedade .length também pode ser usada para adicionar ou remover elementos de um array, o que veremos no próximo tópico.

//Por fim, é importante lembrar que se tentarmos acessar um elemento com um índice que não existe no array, receberemos undefined como resultado:



let meuArray4 = ['maçã', 'banana', 'laranja', 'uva'];
console.log(meuArray[10]); // output: undefined
