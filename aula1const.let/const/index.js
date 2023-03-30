/*
Luiz Otávio Mirando tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';

const sobrenome = 'Miranda';
const idade = 30;
let peso = 84;
let alturaEmCm ;
let indiceMassaCorporal; //peso / (altura * altura)
let anoNascimento;
 

anoNascimento= 2023 - idade;
indiceMassaCorporal = peso/ (alturaEmCm * alturaEmCm);

console.log(`${nome} ${sobrenome} tem ${idade} anos ${peso} kg`);
console.log(`tem ${alturaEmCm}  e seu IMC é de ${indiceMassaCorporal} `);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
