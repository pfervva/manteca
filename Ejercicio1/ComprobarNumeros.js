const numeros = "Tengo 16 mantecados"
function tieneNumeros(numeros) {
    const regex = /\d/.test(numeros)
    if (regex) {
        return("Tiene nuemros")
    }else{
       return("No tiene numeros")
    }   
}
console.log(tieneNumeros(numeros))