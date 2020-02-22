'use strict'

var num1 = parseInt(prompt('Introduce el primer número'));
var num2 = parseInt(prompt('Introduce el segundo número'));

while(num1 == 0 || num2 == 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt('Introduce el primer número'));
    num2 = parseInt(prompt('Introduce el segundo número'));
}

document.write(`<h4>Los números a operar son: ${num1} y ${num2} </h4>`);
document.write(`<h4>El resultado de la suma es: ${num1 + num2}</h4>`);
document.write(`<h4>El resultado de la resta es: ${num1 - num2}</h4>`);
document.write(`<h4>El resultado de la multiplicación es: ${num1 * num2}</h4>`);
document.write(`<h4>El resultado de la divición es: ${num1 / num2}</h4>`);

