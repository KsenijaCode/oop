export class Dog {
    constructor(vardas, spalva, amzius) {
        this.name = vardas;
        this.color = spalva;
        this.age = amzius;
        this.legsCount = 4;
        this.hasTail = true; 
    }

    hello() {
        return 'Au au!';
    }

    think() {
        return '🦴🦴'
    }

    addNumber(a, b) {
        return `${a} + ${b} = ${a + b}`;
    }

    snacks(count) {
        return `${'🍖'.repeat(count)}`;
    }
    
    lostLeg() {
        if (this.legsCount === 0) {
            return 'Suo prarado visas letenas'
        }
        this.legsCount--;
        return `Suo neteko letenos`;
    }

    birthday() {
        this.age++;
        return `Brisiaus ${this.age} gimtadienis 🤩`;
    }
}


