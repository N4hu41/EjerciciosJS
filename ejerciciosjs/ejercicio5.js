'use strict'

var num = parseInt(prompt('Introduce un número'));

document.write(`<h4>Los divisores de ${num} son:</h4>`)

for(var i = 0; i <= num; i++){
    if(num%i == 0){
        document.write(`<h4>${i}</h4>`);
    }
}

