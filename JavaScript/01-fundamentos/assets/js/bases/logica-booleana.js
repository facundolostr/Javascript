
const regresaTrue = () =>{
    console.log('Regresa True');
    return true;
};


const regresaFalse = () =>{
    console.log('Regresa false');
    return false;
};

console.warn ('Not o la negacion');
console.log (true); // true
console.log (!true); // false
console.log (!false); // true

console.log (!regresaFalse()); // true


console.warn ('And') // true si todos los valores son verdaderos
console.log (true && true); // true
console.log (true && false); // false
console.log (true && !false); // true

console.log('==============');
console.log( regresaFalse() && regresaTrue() ); //false (No ejecuta la siguiente funcion porque no es necesario ya que siempre va a dar false)
console.log( regresaTrue() && regresaFalse() ); //false

console.log('4 condiciones', true && true && true && false) // false


console.log ('OR'); // siempre es true si almentos uno de los valores es true

console.log ( true || false ); // true
console.log ( false || false ); // false

console.log( regresaTrue() || regresaFalse() );  // true (No ejecuta la siguiente funcion ya que no es necesario, siempre va a dar true)
console.log('4 condiciones', true || true || true || false) // true



console.warn ('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo' && 150; // Se ejecuta y da el uiltimo valor
// a1 =  false && 'Hola mundo' && 150; // No se va a ejecutar lo que sigue y devuelve un false
const a2 = 'Hola' && 'Mundo' && soyFalse && true; //como todas las condiciones tienen que dar true, para donde es false
const a3 = soyFalse || 'Ya no soy false'; 
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy false' || true; // al asignacion para hasta que encuentra un valor     
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy false' || true; // al asignacion para hasta que encuentra un valor     


console.log(a1, a2, a3, a4, a5);

if (true || true || true || false){
    console.log ('Hacer algo');
} else {
    console.log('Hacer otra consa');
}








