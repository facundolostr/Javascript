
/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abriemos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy

const dia = 0; // 0: domingo... 1: Lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6){
// if ( [0,6].includes(dia) ){
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

/**El operador ternario empieza con "?" que simboliza el "if"
*Seguido del "?" viene la primer valor que retorna
*y para usar el "else" se simboliza con ":" seguido del valor que retorna
*/


// if (horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura} `; // Es una forma de concatenar strings
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura} `;
console.log ({horaApertura, mensaje});

