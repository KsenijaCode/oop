// export class Dog {
//     constructor(name) {
//         this.name = name;
//         this.legsCount = 4;
//         this.animalType = 'dog';
//         this.sound = 'Au!';
//         this.soundCount = 2;
//         this.pic = '🐶';
//     }

//     intro() {
//         return `Hello, my name is ${this.name}`;
//     }

//     voice() {
//         return `${this.name} ${this.pic}: "${this.sound.repeat(this.soundCount)}"`;
//     }
// }

import { Pet } from "./Pet.js";

export class Dog extends Pet {
    constructor(name, breed) {
        super(name, breed);
        this.animalType = 'dog';
        this.sound = 'Au!';
        this.soundCount = 2;
        this.pic = '🐶';
    }
    
}