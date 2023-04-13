//dobre o numero
const numero = [5, 34, 55, 6, 77, 764,]
const numeroFiltrado = numero.map(function(valor) {
    return valor * 2;
});

console.log(numeroFiltrado);
//Para cada elemento retorne apenas uma string com nome da pessoa

const pessoas = [
    {nome: 'mateus', idade: 18 },
    {nome: 'maria', idade: 198 },
    {nome: 'junior', idade: 66 },
    {nome: 'lazaro', idade: 93 },
    {nome: 'jo', idade: 24 },
];

console.log(pessoas);

const nomeString = pessoas.map (obj => obj.nome);

console.log(nomeString);
//Remova apanas a chave "nome" do objeto

const idades = pessoas.map (obj => obj.idade );

console.log(idades);
//Adicione um id a cada chave do objeto

const idDeCadaObjeto = pessoas.map(function (obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});


console.log(idDeCadaObjeto);