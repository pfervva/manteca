const cadena = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays"
const cortes = cadena.split(".").map(texto => texto.trim()).flatMap(texto => texto.split(" "))
console.log(cortes);
const pepe = cadena.split(".");
console.log(pepe);