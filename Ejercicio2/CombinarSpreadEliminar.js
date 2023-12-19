const objeto1 = { a: 1, b: 2, c: 3 };
const objeto2 = { d: 4, e: 5, f: 6 };
const objetoCombinado = {...objeto1,...objeto2 };
console.log(`Objeto combinado:`, objetoCombinado);
const {b, ...objetoCombinadoSinB} = objetoCombinado;

console.log(`Objeto descombinado:`, objetoCombinadoSinB);