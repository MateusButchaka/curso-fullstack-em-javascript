const numeros = [10, 2, 4559, 45, 1, 5, 5, 2, 10];
const filtrado = numeros.filter(valor => valor >= 10);

console.log(filtrado);


const pessoas = [
    {nome: 'mateus', idade: 18 },
    {nome: 'maria', idade: 198 },
    {nome: 'junior', idade: 66 },
    {nome: 'lazaro', idade: 93 },
    {nome: 'jo', idade: 24 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6 );

const pessoasVelhas = pessoas.filter(obj => obj.idade > 50 );

const pessoasComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});

console.log(pessoasComNomeGrande);
console.log(pessoasVelhas);
console.log(pessoasComA);
