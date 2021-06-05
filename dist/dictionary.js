Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
class Dictionary {
    constructor() {
        this.keys = [];
        this.value = [];
    }
    set(key, value) {
        const i = this.getIndex(key);
        if (i < 0) {
            this.keys.push(key);
            this.value.push(value);
        }
        else {
            this.value[i] = value;
        }
    }
    forEach(callback) {
        this.keys.forEach((k, i) => {
            const v = this.value[i];
            callback(k, v);
        });
    }
    hasKey(key) {
        return this.keys.includes(key);
    }
    delete(key) {
        const i = this.getIndex(key);
        if (i === -1)
            return;
        this.keys.splice(i, 1);
        this.value.splice(i, 1);
    }
    get length() {
        return this.keys.length;
    }
    getIndex(key) {
        return this.keys.indexOf(key);
    }
}
exports.Dictionary = Dictionary;
