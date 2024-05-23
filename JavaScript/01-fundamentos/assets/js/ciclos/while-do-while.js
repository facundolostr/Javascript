const carros = ['Ford', 'Mazda', 'Toyota', 'Honda'];
let i = 0;

// while ( i < carros.length ){
//     console.log (carros[i]);
//     i++
// }

//unfefined
//null
//false
//Si tiene alguna de esas condiciones el ciclo se corta


while ( carros[i] ){
    // if (i === 1){
    //     // break;
    // }
    console.log (carros[i]);
    i++
}

console.warn ('Do while');

let j = 0

do{
    console.log(carros[j])
    j++
} while (carros [j]);