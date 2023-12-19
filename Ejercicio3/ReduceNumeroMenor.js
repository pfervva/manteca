const array = [21,34,46,54,65,78,96,46,98,87,45]
let menor = array.reduce((menor, valor) => valor < menor ? valor : menor)
console.log(menor);