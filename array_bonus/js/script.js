console.log('js ok')

const arrayOne = [23, 3, 4, 56, 65, 65, 34, 5, 65, 752, 786, 863, 45];
const arrayTwo = [23, 3, 786, 863, 45];

console.log(arrayOne);
console.log(arrayTwo);

// if (arrayOne.length > arrayTwo.length) {
//     for (i = arrayTwo.length; i < arrayOne.length; i++) {
//         const randomNum = Math.floor(Math.random() * 100) + 1;
//         arrayTwo.push(randomNum);
//     }
// } else {
//     for (i = arrayOne.length; i < arrayTwo.length; i++) {
//         const randomNum = Math.floor(Math.random() * 100) + 1;
//         arrayOne.push(randomNum);
//     }

// }
// console.log(arrayOne);
// console.log(arrayTwo);

let shorter;
let bigger;

if (arrayOne.length > arrayTwo.length) {
    shorter = arrayTwo;
    bigger = arrayOne;
} else {
    bigger = arrayOne;
    shorter = arrayTwo;
}

// const difference = bigger.length - shorter.length;

// for (let i = 0; i < difference; i++) {
//     const randomNum = Math.floor(Math.random() * 100) + 1;
//     shorter.push(randomNum);
// }
// console.log(shorter, bigger);

while (bigger.length > shorter.length) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    shorter.push(randomNum);
}
console.log(shorter, bigger);