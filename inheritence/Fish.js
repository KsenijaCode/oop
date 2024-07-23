export class Fish {
    constructor(name) {
        this.name = name;
        this.animalType = 'fish';
        this.finsCount = 3;
        this.sound = '';
        this.pic = '🐟';
    }

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}`;
    }

    voice() {
        return `${this.name} ${this.pic}: "${this.sound}"`;
    }
}
