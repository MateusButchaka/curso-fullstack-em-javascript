// 705.484.450-52   /  070.987.70-03

/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o numero digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 237

11 - (284 % 11) = 2 (Primeiro digito)
Se o numero digito for maior que 9, consideramos 0. 

*/

//let cpf = '705.484.450-52';


function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf.length !== 11) {
      return false;
    }
   
    let digitoVerificador1 = 0;
    let digitoVerificador2 = 0;
    for (let i = 0; i < 9; i++) {
      digitoVerificador1 += parseInt(cpf[i]) * (10 - i);
      digitoVerificador2 += parseInt(cpf[i]) * (11 - i);
    }
    
    digitoVerificador1 = 11 - (digitoVerificador1 % 11);
    if (digitoVerificador1 > 9) {
      digitoVerificador1 = 0;
    }
  
    digitoVerificador2 = 11 - (digitoVerificador2 % 11);
    if (digitoVerificador2 > 9) {
      digitoVerificador2 = 0;
    }
    if (parseInt(cpf[9]) !== digitoVerificador1 || parseInt(cpf[10]) !== digitoVerificador2) {
      return false;
    }  
    return true;
}
  
  
console.log(validarCPF("123.456.789-09")); // false
  