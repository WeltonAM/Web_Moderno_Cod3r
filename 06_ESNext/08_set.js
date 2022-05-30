const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo');
times.add('Flamengo');

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo');

console.log('-------------');
const nomes = ['Raquel', 'Lucas', 'Julia', 'Raquel'];
const nomesSet = new Set(nomes);
console.log(nomesSet);