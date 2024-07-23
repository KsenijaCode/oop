import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'shark';
        this.finsCount = 8;
        this.sound = 'Rrr!';
        this.pic = '🦈';
    }
}
