//Escreva uma função que receba um numero e
//retorne o seguinte:
//Numero divisivel por 3 - fizz
//Numero divisivel por 5 = buzz
//Numero divisivel por 3 e 5 = FizzBuzz
//Numero NÃO é divisivel por 3 e 5 = retorna o própio numero
//checar se o número é realmente um numero = retorna o propio numero
//Use a função com numeros de 0 a 100

function FizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'fizz';
    if(numero % 5 === 0) return 'buzz';
    return numero;
}

for(let i = 0; i <= 100; i++) {
    console.log(FizzBuzz(i));
}
