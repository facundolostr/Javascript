function saludar (nombre){
    console.log (arguments);
    console.log('Hola '+ nombre);
    return 1;

        //Esto nunca se va a ejecutar
    console.log ('Soy un codigo que esta despues del return');
}

const saludar2 = function(nombre){
    console.log('Hola '+ nombre);
}


const saludarFlecha = () => {
    console.log ('Hola flecha');
} 


const saludarFlecha2 = (nombre) => {
    console.log ('Hola '+ nombre);
} 



const retornoDeSaludar = saludar('Facu', 22, true, 'Costa Rica');
console.log({retornoDeSaludar});

saludar2('Paula');
saludarFlecha ();
saludarFlecha2 ('Melisa');

////////

function sumar (a , b){
    return a + b;
}

const sumar2 = (a,b) =>{
    return a + b;
}

const sumar3 = (a,b) => a + b;


console.log ( sumar(1, 2)  );
console.log ( sumar2(5, 5)  );
console.log ( sumar3(6, 6)  );

////////

function getAleatorio (){
    return Math.random ();
}
console.log ( getAleatorio() );


const getAleatorio2 = () => Math.random ();
console.log ( getAleatorio2 () );







