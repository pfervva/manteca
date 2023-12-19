const cadena = "Pedro Fernandez Gonzalez con 21 años";
const torFnumber = /\.$/.test(cadena);
if  (torFnumber){
    console.log("Termina en punto");
}else{
    console.log("No termina en punto");
}