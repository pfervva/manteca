const numero = "Tengo el 123456789"
function tieneNumeroTelefono(numero) {
    const regex = /[9]/.test(numero)
    if (regex) {
        return("Tiene nuemro")
    }else{
       return("No tiene numero")
    }   
}
console.log(tieneNumeroTelefono(numero))