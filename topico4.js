//Iterando sobre um array
//Uma das coisas mais úteis que podemos fazer com um array é iterar sobre seus elementos. Isso nos permite acessar cada elemento //individualmente e executar alguma operação nele. Em JavaScript, existem várias maneiras de fazer isso:

//4.1 Usando um loop for:



let meuArray1 = ['maçã', 'banana', 'laranja'];
for (let i = 0; i < meuArray1.length; i++) {
  console.log(meuArray1[i]);
}
// output:
// 'maçã'
// 'banana'
// 'laranja'


//4.2 Usando um loop for...of:



let meuArray2 = ['maçã', 'banana', 'laranja'];
for (let elemento of meuArray2) {
  console.log(elemento);
}
// output:
// 'maçã'
// 'banana'
// 'laranja'


//4.3 Usando o método .forEach():



let meuArray3 = ['maçã', 'banana', 'laranja'];
meuArray3.forEach(function(elemento) {
  console.log(elemento);
});
// output:
// 'maçã'
// 'banana'
// 'laranja'

/*
Cada um desses métodos tem suas próprias vantagens e desvantagens, dependendo da situação. O for é o mais básico e versátil, mas também o mais verboso. O for...of é mais conciso e fácil de ler, mas não é adequado para todas as situações. Já o método .forEach() é mais elegante e expressivo, mas não tem a mesma flexibilidade do for.

É importante lembrar que, ao iterar sobre um array, podemos modificar seus elementos ou executar alguma operação com base em seu valor.
*/