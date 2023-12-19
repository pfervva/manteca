const array = Array.of(1,2,3,4,5)
array[10] = ("Hola")
array[50] = ("Hola")
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("Ahora con el foreach")
array.forEach(i => {
    console.log(i)
});
//La diferencia es que el for lee los undefined y el foreach no. 
