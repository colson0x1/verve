"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = void 0;
const CollectionView_1 = require("./CollectionView");
const UserShow_1 = require("./UserShow");
class UserList extends CollectionView_1.CollectionView {
    renderItem(model, itemParent) {
        new UserShow_1.UserShow(itemParent, model).render();
    }
}
exports.UserList = UserList;
