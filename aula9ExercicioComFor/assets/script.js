document.addEventListener('DOMContentLoaded', function() {
    const elementos = [
        {tag: 'p', texto:'frase1'}, //0
        {tag: 'div', texto:'frase2'}, //1
        {tag: 'footer', texto:'frase3'}, //2
        {tag: 'section', texto:'frase4'}, //3
    ];

    const container = document.querySelector('.container');

    for(let i = 0; i < elementos.length; i++) {
        const elemento = document.createElement(elementos[i].tag);
        elemento.textContent = elementos[i].texto;
        container.appendChild(elemento);
    }
});