const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433'};
for(const [a,b] of Object.entries(person)) { 
    console.log(a,b); 
}
