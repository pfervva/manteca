const datos = []
for (let index = 0; index <= 50; index++) {
datos.push(index)
}
datos.length = datos.length - 25

let arrayCopia = [...datos]
console.log(arrayCopia)