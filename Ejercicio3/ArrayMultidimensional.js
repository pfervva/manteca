let arrayMultidimensional = []

for (let i = 0; i < 15; i++) {
    let linea = []

for (let j = 0; j < 15; j++) {
    linea.push(i * j)    
}
arrayMultidimensional.push(linea);
    
}

console.log(arrayMultidimensional)