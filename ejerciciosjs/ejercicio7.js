'use strict'
var resultado = 0;
var num = parseInt(prompt('Introduce un número'));


for(var i = 1; i <= 10; i++){
    resultado = num*i;
    document.write(`<h4>${num} x ${i} = ${resultado}</h4>`);
}