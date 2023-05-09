/*
O que são arrays em JavaScript e como declará-los
Os arrays são uma das estruturas de dados mais comuns em JavaScript e são usados para armazenar um conjunto de valores relacionados em uma única variável. Cada valor em um array é chamado de elemento e é identificado por um índice numérico único que começa em 0.

Em JavaScript, um array pode ser declarado usando colchetes [] e separando os elementos por vírgulas. Aqui está um exemplo simples:
*/
let meuArray1 = [1, 2, 3, 4, 5];

//Podemos declarar arrays vazios também, sem nenhum elemento:

let meuArrayVazio = [];

//Podemos ter arrays com diferentes tipos de dados, como strings, números, booleanos e objetos:

let meuArray2 = ['maçã', 3, true, {nome: 'João', idade: 25}];

//Podemos acessar elementos de um array usando seus índices numéricos. Por exemplo, para acessar o primeiro elemento em um array, usamos o índice 0:

let meuArray3 = [1, 2, 3, 4, 5];
console.log(meuArray3[0]); // output: 1

//Também podemos alterar os valores de um elemento do array usando seu índice:

let meuArray4 = [1, 2, 3, 4, 5];
meuArray4[0] = 10;
console.log(meuArray4); // output: [10, 2, 3, 4, 5]

//Por fim, é importante lembrar que os arrays em JavaScript são objetos e possuem métodos e propriedades que podemos usar para manipular e acessar seus elementos. Veremos mais sobre isso nos próximos tópicos da apresentação.