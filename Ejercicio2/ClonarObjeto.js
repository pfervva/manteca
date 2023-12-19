const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    direccion: {
      calle: 'Calle 1',
      numero: 123,
      ciudad: 'Ciudad 1',
      provincia: 'Provincia 1'
    },
    telefono: {
      celular: 123456789,
      fijo: 987654321
    }
  };
  
const personaClonada = {...persona};

console.log(`Persona clonada:`, personaClonada);
