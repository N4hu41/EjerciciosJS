'use strict'

var num = parseInt(prompt('Introduce un número'));

while(num < 0 || isNaN(num)){
    num = parseInt(prompt('Introduce un número'));
}
if(num%2 == 0){
    document.write(`EL número ${num} es PAR `)
}else{
    document.write(`<h4>el número ${num} es impar</h4>`)
}




