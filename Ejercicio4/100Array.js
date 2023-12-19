const Numeros = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));

function calMedia(array) {
  const suma = array.reduce((acc, num) => acc + num, 0);
  return suma / array.length;
}
const mediaAritmetica = calMedia(Numeros);
console.log("Media:", mediaAritmetica);
 
function calfrec(array) {
  const frec = Array(100).fill(0);

  for (const num of array) {
    frec[num]++;
  }
  return frec;
}
const frecNumeros = calfrec(Numeros);
console.log("Frecuencia por numero:", frecNumeros);

function ordenar(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
const arrayOrdenadoSinMetodos = ordenar(Numeros.slice());
console.log("Array sin metodos:", arrayOrdenadoSinMetodos);

function ordenarMetodos(array) {
  return array.slice().sort((a, b) => a - b);
}
const arrayOrdenadoConMetodos = ordenarMetodos(Numeros.slice());
console.log("Array con metodos:", arrayOrdenadoConMetodos);
