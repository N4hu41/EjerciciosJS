'use strict'

var cont = 0;
var suma = 0;

alert('El progrma se detendra al introducir un número negativo')

do{
    var num =parseInt(prompt('Introduce un número'));
    if(isNaN(num)){
        numero = 0;
    }
    else if(num >= 0){
        suma += num;
        cont++;
    }
}while(num >= 0)
document.write(`<h1>La suma es: ${suma}</h1>`);
document.write(`<h1>La media es: ${(suma/cont)} </h1>`);
document.write(`<h4>Ingresaste ${cont} números</h4>`);
