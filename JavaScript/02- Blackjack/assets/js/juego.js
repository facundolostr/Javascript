/**
 * 2C = two the clubss (treboles)
 * 2D = two the diaminds (diamantes)
 * 2H = two the hearts (corazones)
 * 2S = two the spades (espadas)
 */

let deck = [];
const tipos = ['C', 'D', "H","S"];
const especiales = ['A', 'J', 'Q', 'K'];



const crearDeck = () =>{

    for(let i = 2; i <= 10; i++){
        for (let tipo of tipos){
        deck.push (i + tipo);
        }
    }

    for ( let tipo of tipos){
        for (let esp of especiales){
            deck.push (esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

crearDeck();

function esFinDeSemana (dia){
    return dia === 'sabado' || dia === 'domingo'
  }
  
