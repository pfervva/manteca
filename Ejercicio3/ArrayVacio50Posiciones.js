const arrayAleatorio = new Array(50).fill(0).map(() => Math.floor(Math.random() * 101)); 

arrayAleatorio.sort((a, b) => a - b);
console.log("Array aleatorio ordenado de menor a mayor:", arrayAleatorio);

arrayAleatorio.sort((a, b) => b - a); 
console.log("Array aleatorio ordenado de mayor a menor:", arrayAleatorio);