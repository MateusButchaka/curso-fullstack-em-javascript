const form = document.getElementById('form');
const resultado = document.getElementById('resultado');


form.addEventListener('submit', function(evento) {
  evento.preventDefault(); 

  
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);



  if (isNaN(peso) || peso <= 0) {
    resultado.innerHTML = `Peso inválido.`;
    resultado.style.backgroundColor = 'rgb(255, 150, 150)';
    resultado.style.padding = '5px';
    resultado.classList.add('error');
    return;
  }

  
  if (isNaN(altura) || altura <= 0) {
    resultado.innerHTML = `Altura inválida.`;
    resultado.style.backgroundColor = 'rgb(255, 150, 150)';
    resultado.style.padding = '5px';
    resultado.classList.add('error1');
    return;
  }
  
  const imc = peso / (altura * altura);

  
  if (imc < 18.5) {
    resultado.style.backgroundColor = 'rgb(109, 255, 182)';
    resultado.style.padding = '5px';
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Abaixo do peso.`;
  } else if (imc < 24.9) {
    resultado.style.backgroundColor = 'rgb(109, 255, 182)';
    resultado.style.padding = '5px';
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Peso normal.`;
  } else if (imc < 29.9) {
    resultado.style.backgroundColor = 'rgb(109, 255, 182)';
    resultado.style.padding = '5px';
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Sobrepeso.`;
  } else if (imc < 34.9) {
    resultado.style.backgroundColor = 'rgb(109, 255, 182)';
    resultado.style.padding = '5px';
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Obesidades grau 1.`;
  } else if (imc < 39.9) {
    resultado.style.backgroundColor = 'rgb(109, 255, 182)';
    resultado.style.padding = '5px';
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Obesidades grau 2.`;
  } else {
    resultado.style.backgroundColor = 'rgb(109, 255, 182)';
    resultado.style.padding = '5px';
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Obesidades grau 3.`;
  } 
  
});
