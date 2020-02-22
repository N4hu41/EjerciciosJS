'use strict'

var num1 = 0;
var num2 = 0;

while(isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0){
num1 = parseInt(prompt('Introduce el primer número', 0));
num2 = parseInt(prompt('Introduce el segundo número', 0));
}
if(num1 == num2){
    document.write("<h1>Los números son iguales</h1>");
}else if(num1 < num2)
{
    document.write(  `<h1>El primer núemro es: ${num1} y es menor que el segundo.</h1>`);
    document.write(`<h1>El segundo número es: ${num2} y es mayor que el primero.</h1>`);
}else{
    document.write(`<h1>El segundo número es: ${num2} y es menor que el primero.</h1>`);
    document.write(`<h1>El primer número es: ${num1} y es mayor que el segundo.</h1>`);
}
 
 