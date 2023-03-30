const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const numeroRaizQuadrada = document.getElementById('numero-Raiz-quadrada')
const numeroInteiro = document.getElementById('numero-inteiro')
const nomeFalTru = document.getElementById('inteiro-fal-tru')
const namFalTru = document.getElementById('nam-fal-tru')
const numeroArredondadoBaixo = document.getElementById('numero-arredondade-baixo')
const numeroArredondadoCima = document.getElementById('numero-arredondado-cima')
const numeroComDuasCasa =  document.getElementById('numero-duas-casas-decimais')


numeroTitulo.innerHTML = numero;

const raizQuadrada = Math.sqrt(numero);
numeroRaizQuadrada.innerHTML = raizQuadrada;

numeroInteiro.innerHTML = numero;
if(Number.isInteger(numero)){
    nomeFalTru.innerHTML = 'true';
} else{
    nomeFalTru.innerHTML = 'false';
}


if (isNaN(numero)) {
    namFalTru.innerHTML = 'true';
} else{
    namFalTru.innerHTML = 'false';
}

numeroArredondadoBaixo.innerHTML = Math.floor(numero);

numeroArredondadoCima.innerHTML = Math.ceil(numero);

numeroComDuasCasa.innerHTML = numero.toFixed(2);





