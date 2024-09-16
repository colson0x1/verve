"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor(attributes, events, sync) {
        this.attributes = attributes;
        this.events = events;
        this.sync = sync;
        this.on = this.events.on;
        this.trigger = this.events.trigger;
        this.get = this.attributes.get;
    }
    set(update) {
        this.attributes.set(update);
        this.events.trigger('change');
    }
    fetch() {
        const id = this.get('id');
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }
        this.sync.fetch(id).then((response) => {
            this.set(response.data);
        });
    }
    save() {
        this.sync
            .save(this.attributes.getAll())
            .then((response) => {
            this.trigger('save');
        })
            .catch(() => {
            this.trigger('error');
        });
    }
}
exports.Model = Model;
