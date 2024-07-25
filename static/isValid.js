export class isValid {
    static requiredLengthString(str, minLength, maxLength) {
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < minLength) {
            return false;
        }
        if (str.length > maxLength) {
            return false;
        }

        return true;
    }

    static containsAllowedSymbols(str, allowedSymbols) {
        for (const symbol of str) {
            if (!allowedSymbols.includes(symbol)) {
                return false;
            }
        }

        return true;
    }

    static doesNotContainNotAllowedSymbols(str, allowedSymbols) {
        for (const symbol of str) {
            if (!allowedSymbols.includes(symbol)) {
                return false;
            }
        }

        return true;
    }

    static username(str) {
        const minLength = 4;
        const maxLength = 20;
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static email(str) {
        const minLength = 6;
        const maxLength = 35;
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.-_';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static phone(str) {
        const minLength = 8;
        const maxLength = 20;
        const abc = '0123456789+-() '

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static name(str) {
        const minLength = 2;
        const maxLength = 20;
        const abc = ' 0123456789?!-+=_;:`"@()[]{}\\/|<>,.#~£$%^&*<>\r\n\t';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static surname(str) {
        const minLength = 2;
        const maxLength = 20;

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static password(str) {
        const minLength = 8;
        const maxLength = 25;

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static IBAN(str) {
        const minLength = 16;
        const maxLength = 24;

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static URL(str) {
        const minLength = 2;
        const maxLength = 3000;

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static urlSlug(str) {
        const minLength = 1;
        const maxLength = 120;

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }
}
