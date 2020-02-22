'use strict'

var num = parseInt(prompt('Intruduce el primer número'));
var num1 = parseInt(prompt('Intruduce el segundo número'))

document.write(`<h4>los numeros impares del ${num} al ${num1} son: </h4>`)

for(num ; num <= num1; num++){
    if((num % 2) == 1){
        document.write(`<h4>${num}</h4>`);
    };
}