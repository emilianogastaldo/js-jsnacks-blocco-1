console.log('js ok')
//Chiedo la lunghezza dell'array

const listLength = parseInt(prompt('Quanti numeri vuoi?'));
console.log('lunghezza: ', listLength);
const numberToPrint = parseInt(prompt('Quanti numeri devo stamparti?'))
if (numberToPrint > listLength) {
    alert('Numeri sbagliti');
} else {

    //Creo l'array
    const numberList = [];
    //Riempio l'array
    for (i = 0; i < listLength; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        numberList.push(randomNum);
    }
    //Stampo l'array
    console.log(numberList);
    // Facendo così scrivo l'array al contrario
    // for (i = listLength - 1; i >= listLength - 5; i--) {
    //     console.log(numberList[i]);
    // }

    //Stampo gli ultimi 5 o numberToPrint elementi in ordine
    for (i = listLength - numberToPrint; i < listLength; i++) {
        console.log(numberList[i]);
    }
}