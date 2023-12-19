const cadena = "Pedro Fernandez Gonzalez con 21 años";
const torFnumber = /^[A-Z]/.test(cadena);
if  (torFnumber){
    console.log("Empieza por mayuscula");
}else{
    console.log("No empieza por mayuscula");
}