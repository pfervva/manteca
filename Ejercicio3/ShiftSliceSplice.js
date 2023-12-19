// Crear los arrays a y b con literales
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

// Concatenar arrays a y b con concat
const concatenacionConcat = a.concat(b);

// Concatenar arrays a y b con operador spread
const concatenacionSpread = [...a, ...b];

// Crear una variable const cola
const cola = [];

// Usar unshift para añadir elementos a la cola
cola.unshift(11);
cola.unshift(12);

// Imprimir la cola después de unshift
console.log("Cola después de unshift:", cola);

// Usar shift para quitar elementos de la cola
const elementoEliminado = cola.shift();

// Imprimir la cola después de shift
console.log("Cola después de shift:", cola);
console.log("Elemento eliminado:", elementoEliminado);

// Obtener el subarray desde el índice 2 al penúltimo elemento con slice
const subarraySlice = concatenacionSpread.slice(1, -2);

// Imprimir el subarray obtenido con slice
console.log("Subarray con slice:", subarraySlice);

// Usar splice para quitar los 2 últimos elementos del array
concatenacionSpread.splice(-2);

// Imprimir el array después de usar splice
console.log("Array después de splice:", concatenacionSpread);