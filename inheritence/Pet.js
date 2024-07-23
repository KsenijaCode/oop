export class Pet {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.legsCount = 4;
        this.animalType = 'pet';
        this.sound = '🎶';
        this.pic = '🎁';
    }

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}`;
    }

    voice() {
        return `${this.name} ${this.pic}: "${this.sound.repeat(this.soundCount)}" - ${this.breed}`;
    }
}
