const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefa')
const listaTarefas = [];

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(evento){
    if (evento.keyCode == 13) {
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li, posicao) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    botaoApagar.setAttribute('data-posicao', posicao);
    li.appendChild(botaoApagar);
}

function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefa.appendChild(li);
    listaTarefas.push(textoInput);
    limpaInput();
    criaBotaoApagar(li, listaTarefas.length - 1);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) {
        const posicao = el.getAttribute('data-posicao');
        listaTarefas.splice(posicao, 1);
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const tarefaJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    if (tarefas) {
        const listaDeTarefas = JSON.parse(tarefas);
        for (let tarefa of listaDeTarefas) {
            criarTarefa(tarefa);
        }
    }
}

adicionaTarefasSalvas();

