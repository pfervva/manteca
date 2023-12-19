const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
function recogerImpares(array) {
    const arrayImpares = [];
    const arrayPares = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 != 0 ){
        arrayImpares.push(array[index])
        }
        else{
            arrayPares.push(array[index])
        }
        
    }
    return arrayImpares;
}
console.log(recogerImpares(arrayNumeros));
