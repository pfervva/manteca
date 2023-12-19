let arrayMultidimensional = []
for (let i = 0; i < 5; i++) {
    let linea = []

for (let j = 0; j < 5; j++) {
    linea.push(i * j)    
}
arrayMultidimensional.push(linea);
   
}
console.log(arrayMultidimensional)
const arrayNueve = arrayMultidimensional.flat();

console.log(arrayNueve);