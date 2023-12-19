const texto = "Esta es la cadena a revertir"
console.log("Esta es la cadena normal: "+texto)

function revetirCadena(texto){
return texto.split("").reverse().join("");
}

console.log(revetirCadena(texto))