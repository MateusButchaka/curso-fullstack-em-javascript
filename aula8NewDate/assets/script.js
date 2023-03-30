const h1 = document.querySelector('.container h1');
const data = new Date();
const hora = data.getHours().toString().padStart(2, '0'); 
const minuto = data.getMinutes().toString().padStart(2, '0'); 
h1.innerHTML = `${data.toLocaleDateString('pt-BR', { dateStyle: 'full' })} ${hora}:${minuto}`;
