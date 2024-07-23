// export class Cat {
//     constructor(name) {
//         this.name = name;
//         this.legsCount = 4;
//         this.animalType = 'cat';
//         this.sound = 'Miau!..';
//         this.pic = '🐱';
//     }

//     intro() {
//         return `Hello, I am a ${this.animalType} and my name is ${this.name}`;
//     }

//     voice() {
//         return `${this.name} ${this.pic}: "${this.sound}"`;
//     }
// }

import { Pet } from "./Pet.js";

export class Cat extends Pet {
    // copy-paste Pet {}
    // constructor() {}
    // intro() {}
    // voice() {}

    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.animalType = 'cat';
        this.sound = 'Miau!..';
        this.pic = '🐱';
    }
}