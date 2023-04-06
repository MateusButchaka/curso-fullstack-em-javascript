function relogio() {
  const criaHoraDosSegundos = segundos =>
    new Date(segundos * 1000).toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  const iniciaRelogio = () => {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  };

  document.addEventListener('click', e => {
    clearInterval(timer);
    const el = e.target;
    el.classList.contains('zerar') && ((segundos = 0), (relogio.innerHTML = '00:00:00'));
    el.classList.contains('iniciar') && iniciaRelogio();
    el.classList.contains('pausar') && relogio.classList.add('pausado');
  });
}

relogio();
