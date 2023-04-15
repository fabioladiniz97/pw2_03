import {arraysEqual, equalElements, arraysOfArraysEqual, compareArrays, Cidade, descreveCidade, Restaurante, agruparRestaurantesPorCidade} from './index'

console.log('---Primeira questao---')
var firstArray = ['sona','ashe','nami']
var secondArray = ['sona','ashe','taric']
console.log(arraysEqual(firstArray,secondArray))
var firstArray = ['sona','ashe','nami']
var secondArray = ['sona','ashe','nami']
console.log(arraysEqual(firstArray,secondArray))

console.log('---Segunda questão---')
var firstArray = ['sona','ashe']
var secondArray = ['sona','ashe','nami']
console.log(equalElements(firstArray,secondArray))
var firstArray = ['sona','ashe','taric']
var secondArray = ['sona','ashe','nami']
console.log(equalElements(firstArray,secondArray))

console.log('---Terceira questao---')
const a: string[][] = [['a', 'b'], ['c', 'd']]
const b: string[][] = [['a', 'b'], ['c', 'd']]
const c: string[][] = [['a', 'b'], ['d', 'c']]
console.log(arraysOfArraysEqual(a, b))
console.log(arraysOfArraysEqual(a, c))

console.log('---Quarta questao---')
const d: string[][] = [['a', 'b'], ['c', 'd']]
const e: string[][] = [['a', 'b'], ['d', 'c']]
const result = compareArrays(d, e)
console.log(result)

console.log('---Quinta questao---')
const cidade: Cidade = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coordenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
  };
  
  console.log(descreveCidade(cidade));
  
console.log('---Sexta questao---')
const restaurantes: Restaurante[] = [
    { cidade: "Cajazeiras", nome: "Burgdega" },
    { cidade: "Sousa", nome: "Dino's" },
    { cidade: "Cajazeiras", nome: "Avenida" },
];
  
const resultado = agruparRestaurantesPorCidade(restaurantes);
console.log(resultado);


