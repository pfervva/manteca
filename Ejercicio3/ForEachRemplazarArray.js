const array = [4,2,3,4,5,6,7,8,9,10,11,12,13]
array.forEach((element, indice) => {
    if(array[indice] %2 == 0){
        array[indice] = array[indice]*array[indice]
    }
});
console.log("Los numeros pares haran x*x: " + array);