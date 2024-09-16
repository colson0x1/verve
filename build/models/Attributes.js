"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
class Attributes {
    constructor(data) {
        this.data = data;
        this.get = (key) => {
            return this.data[key];
        };
    }
    set(update) {
        Object.assign(this.data, update);
    }
    getAll() {
        return this.data;
    }
}
exports.Attributes = Attributes;
