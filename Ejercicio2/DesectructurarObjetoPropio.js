const objeto = {nombre: "Pedro",apellido:"Fernandez",edad: "22",curso: "2º ESO", hermanos: "1"}
function imprimirNombre(obj) {
    const {nombre : nombre1,apellido:apellido1,edad:edad1,curso:curso1,hermanos:hermanos1} = obj
    return(nombre1+" "+apellido1)
}
console.log(imprimirNombre(objeto))