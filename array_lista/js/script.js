console.log('js ok')

//Creo il frigorifero con la frutta
const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

console.table(frigorifero);

//aggiungo la pesca
frigorifero.push('pesca');

console.table(frigorifero);

let message = '';
//Cerco il cocomero
const cocomero = 'cocomero'
for (i = 0; i < frigorifero.length; i++) {
    message = 'Oh no, devo uscire a comprare il cocomero!'
    if (frigorifero[i] === cocomero) {
        message = 'Trovato! Devo solo preparare il cocktail.'
    }
}

console.log(message);