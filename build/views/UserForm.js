"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
const View_1 = require("./View");
class UserForm extends View_1.View {
    constructor() {
        super(...arguments);
        this.onSaveClick = () => {
            this.model.save();
        };
        this.onSetNameClick = () => {
            const input = this.parent.querySelector('input');
            if (input) {
                const name = input.value;
                this.model.set({ name });
            }
        };
        this.onSetAgeClick = () => {
            this.model.setRandomAge();
        };
    }
    eventsMap() {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick,
        };
    }
    template() {
        return `
      <div>
        <input placeholder='${this.model.get('name')}' />
        <button class='set-name'>Change Name</button>
        <button class='set-age'>Set Random Age</button>
        <button class='save-model'>Save User</button>
      </div>
    `;
    }
}
exports.UserForm = UserForm;
