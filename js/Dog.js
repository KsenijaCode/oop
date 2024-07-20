export class Dog {
    constructor(vardas, spalva, amzius) {
        this.name = vardas;
        this.color = spalva;
        this.age = amzius;
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
}


