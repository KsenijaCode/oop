import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'golden fish';
        this.finsCount = 5;
        this.sound = 'Make a Wish...';
        this.pic = '🐡';
        this.picCount = 3;
    }
}