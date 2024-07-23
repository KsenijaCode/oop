class Tekstas {
    static firstSymbol(str) {
        return str[0] ?? '';
    }

    static lastSymbol(str) {
        return str.at(-1) ?? '';
    }
}

function firstSymbol(str) {
    return str[0] ?? '';
}

function lastSymbol(str) {
    return str.at(-1) ?? '';
}

console.log(Tekstas.firstSymbol('Labas'));
console.log(Tekstas.firstSymbol('Rytas'));
console.log(Tekstas.lastSymbol('Labas'));
console.log(Tekstas.lastSymbol('Rytas'));

console.log(firstSymbol('Labas'));
console.log(firstSymbol('Rytas'));
console.log(lastSymbol('Labas'));
console.log(lastSymbol('Rytas'));