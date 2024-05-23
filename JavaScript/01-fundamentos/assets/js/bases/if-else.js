
let a = 1;

if ( a >= 10){ // undifined, null p una asignacion
    console.log ('A es mayor o igual a 10');
} else {
    console.log ('A es menor que 10');
}

// console.log ('Fin de programa')

const hoy = new Date();
let dia = hoy.getDay (); // 0: Domingo, 1: Lunes, 2: martes......
console.log ({dia});

if (dia === 0){
    console.log (' Hoy es Domingo');
} else if ( dia === 1 ) {
    console.log ('Hoy es Lunes');
} else {
    console.log ('Hoy no es Domingo ni lunes');
}

// sin usar If ELse, o switch, unicamente objetos

let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const fecha = new Date();
numDia =  fecha.getDay();
console.log ('Hoy es: ', dias[numDia]);

// otra forma de hacerlo con objetos

dia2 = 20;
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
};

console.log (diasLetras [dia2] || 'Dia no definido');

