import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";

const rex = new Dog('Rex', 'aviganis');
console.log(rex);

const brisius = new Dog('Brisius', 'kiemsargis');
console.log(brisius);

console.log(rex.intro());
console.log(brisius.intro());

console.log(rex.voice());
console.log(brisius.voice());


const rainis = new Cat('Rainis', 'sfinksas');

console.log(rainis);
console.log(rainis.intro());
console.log(rainis.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom);
console.log(tom.intro());
console.log(tom.voice());