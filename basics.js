// Variables var, let, const
var globales = 1;

let locales = 2;

const constante = 3.141592;

// tipos de datos
const numero = 3.14;
let palabra = 'roca';
let booleano = false;

let indefinido = undefined;
let nulo = null; // Vació total
const carro = {
    color: 'verde',
    modelo: 2006,
    tieneEspejos: true
};

let lista = ['Zanahoria', 'papa'];


// Condicionales if - else if - else - else
// if (5 === 6) {
//     console.log(1)
// } else if (4 > 5) {
//     console.log(2)
// } else if (4 === 7) {
//     console.log(3)
// } else {
//     console.log(0)
// }


// Ciclos for y while
// for (let contador = 0; contador < 3; contador++) {
//     console.log(contador)
// }

// let x = 0; 
// while (x < 3) {
//     console.log(x)
//     x++;
// }

// for (const producto of lista) {
//     console.log(producto)
// }

// for (const indice in lista) {
//     console.log(indice);
// }

// funciones
function suma() {
    let num1 = 5;
    let num2 = 10;

    return num1 + num2 
}

console.log(suma())