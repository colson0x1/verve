"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShow = void 0;
const View_1 = require("./View");
class UserShow extends View_1.View {
    template() {
        return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
    }
}
exports.UserShow = UserShow;
