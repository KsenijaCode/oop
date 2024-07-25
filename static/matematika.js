const add = (a, b) => a + b;
const diff = (a, b) => a - b;
const multi  = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;


export const matematika = {
    add: add,           // (a, b) => a + b
    diff: diff,         // (a, b) => a - b
    multi: multi,       // (a, b) => a * b
    div: div,           // (a, b) => a / b
    mod: mod,           // (a, b) => a % b
};

// function add(a, b) {            // const add = function (a, b) {
//     return a + b;               //     return a + b;
// }                               // }

// diff ()

// function diff(a, b) {
//     return a - b;
// }

// function multi(a, b) {
//     return a * b;
// }


console.log(add(3, 2));

console.log(matematika);
console.log(matematika.add(3, 5));