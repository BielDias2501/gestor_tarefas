// const prompt = require ("prompt-sync")()
// let valordigitado
// do{
//     valordigitado = prompt("Digite um valor:(digite sair para sair)")
    
// }while (valordigitado !== "sair")

const dados = ["joaozin", "zezin"]

const index = dados.indexOf("joaozin")

const elemento = dados.splice(index, 1)

console.log(dados)
console.log(elemento)
