export class isValid {
    static username(str) {
        const usernameMinLength = 4;
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < usernameMinLength) {
            return false;
        }

        return true;
    }

    static email(str) {
        const emailMinLength = 6;
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < emailMinLength) {
            return false;
        }

        return true;
    }

    static urlSlug(str) {
        return '';
    }
}
