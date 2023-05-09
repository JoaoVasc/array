/*
Trabalhando com arrays multidimensionais
Os arrays multidimensionais (também conhecidos como arrays aninhados) são arrays que contêm outros arrays como seus elementos. Em outras palavras, são arrays que possuem arrays como elementos individuais.

Os arrays multidimensionais podem ser usados para representar matrizes, tabelas, imagens, entre outras coisas. Para acessar os elementos de um array multidimensional, precisamos especificar os índices de cada dimensão separados por vírgula.

Veja alguns exemplos de arrays multidimensionais em JavaScript:
*/


let minhaMatriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(minhaMatriz[0][0]); // output: 1
console.log(minhaMatriz[1][2]); // output: 6
console.log(minhaMatriz[2][1]); // output: 8

let minhaTabela = [
  ['Nome', 'Idade', 'Cidade'],
  ['João', 25, 'São Paulo'],
  ['Maria', 30, 'Rio de Janeiro'],
  ['Pedro', 22, 'Belo Horizonte']
];

console.log(minhaTabela[0][1]); // output: 'Idade'
console.log(minhaTabela[3][2]); // output: 'Belo Horizonte'


//Podemos iterar sobre um array multidimensional usando um loop for aninhado. Veja um exemplo:


let minhaOutraMatriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < minhaOutraMatriz.length; i++) {
  for (let j = 0; j < minhaOutraMatriz[i].length; j++) {
    console.log(minhaOutraMatriz[i][j]);
  }
}
// output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

/*
Neste exemplo, usamos dois loops for aninhados para percorrer todos os elementos da matriz e imprimi-los na tela. Note que, no segundo loop, estamos acessando o comprimento do sub-array atual usando minhaMatriz[i].length. Isso é necessário porque cada sub-array pode ter um comprimento diferente.
*/