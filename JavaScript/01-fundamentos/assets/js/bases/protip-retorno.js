// function crearPersona (Nombre, Apellido){
//     return{nombre,apellido,}
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona ('Facundo', 'Lostri');
console.log (persona);

function impremeArgumentos () {
    console.log (arguments);
}

const impremeArgumentos2 = (edad, ...args) => {
    // console.log ({edad, args});
    return args;
}


impremeArgumentos (10, true, false, 'Hola');
const [casado, vivo, saludo] = impremeArgumentos2 (10, true, false, 'Hola');
console.log ({casado, vivo, saludo});

const {apellido: nuevoApellido} = crearPersona ('Facundo', 'Lostri')
console.log ({nuevoApellido});





const tony = {
    nombre: 'Tony Stark',
    casado: true,
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
};

// const imprimePropiedads = (personaje) =>{
//     console.log('nombre', personaje.nombre);
//     console.log('casado', personaje.casado);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
// }



const imprimePropiedads = ({nombre, codeName, vivo, edad = 14, trajes,}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}


imprimePropiedads (tony);