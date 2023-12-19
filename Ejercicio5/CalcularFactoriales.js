function cFactoriales(n) {
    let solucion = 1;

    for (let i = 1; i <= n; i++) {

      solucion *= i;
    }
    return solucion;
  }
  let nEjemplo = 5;

  let fSolucion = cFactoriales(nEjemplo);
  
  console.log(`El factorial de:  ${nEjemplo} es ${fSolucion}`);
  