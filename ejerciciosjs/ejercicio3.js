'use strict'

 var num1 = parseInt(prompt('Introduce el primer número:'));
 var num2 = parseInt(prompt('Introduce el segundo número:'));

 document.write(`<h4>Los numeros del ${num1} al ${num2} son: </h4>`);
 
 for(num1 ; num1 <= num2; num1++){
        document.write(`<h4>número: ${num1}</h4><br>`);  
 }
