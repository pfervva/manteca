function Ocurrencias(palabra , texto) {
    let longuitud = [];
    let x = texto.indexOf(palabra);
    
   while (x !== -1) {
      longuitud.push(x);
      console.log(x)
      x = texto.indexOf(palabra, x + 1);
      
   }
   return longuitud;
  }
  let texto = "Ayer me compre dos coches, un coche rojo y otro coche amarillo";
  let palabra = "coche";
  let ocurrencias = Ocurrencias(palabra , texto);
  //console.log(`"${palabra}" aparece: ${ocurrencias} en el texto.`);
  
  