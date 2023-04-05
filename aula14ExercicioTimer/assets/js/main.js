function relogio() {
  const criaHoraDosSegundos = segundos =>
    new Date(segundos * 1000).toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  const iniciaRelogio = () =>
    (timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000));

  document.addEventListener('click', ({ target }) => {
    clearInterval(timer);
    relogio.classList.remove('pausado');

    target.classList.contains('zerar') &&
      ((segundos = 0), (relogio.innerHTML = '00:00:00'));

    target.classList.contains('iniciar') && iniciaRelogio();

    target.classList.contains('pausar') && relogio.classList.add('pausado');
  });
}

relogio();