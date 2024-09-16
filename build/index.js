"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = exports.CollectionView = exports.UserShow = exports.UserList = exports.UserForm = exports.UserEdit = exports.Eventing = exports.Model = exports.Attributes = exports.ApiSync = exports.Collection = exports.User = void 0;
/* Exporting models */
var User_1 = require("./models/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
var Collection_1 = require("./models/Collection");
Object.defineProperty(exports, "Collection", { enumerable: true, get: function () { return Collection_1.Collection; } });
var ApiSync_1 = require("./models/ApiSync");
Object.defineProperty(exports, "ApiSync", { enumerable: true, get: function () { return ApiSync_1.ApiSync; } });
var Attributes_1 = require("./models/Attributes");
Object.defineProperty(exports, "Attributes", { enumerable: true, get: function () { return Attributes_1.Attributes; } });
var Model_1 = require("./models/Model");
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return Model_1.Model; } });
var Eventing_1 = require("./models/Eventing");
Object.defineProperty(exports, "Eventing", { enumerable: true, get: function () { return Eventing_1.Eventing; } });
/* Exporting views */
var UserEdit_1 = require("./views/UserEdit");
Object.defineProperty(exports, "UserEdit", { enumerable: true, get: function () { return UserEdit_1.UserEdit; } });
var UserForm_1 = require("./views/UserForm");
Object.defineProperty(exports, "UserForm", { enumerable: true, get: function () { return UserForm_1.UserForm; } });
var UserList_1 = require("./views/UserList");
Object.defineProperty(exports, "UserList", { enumerable: true, get: function () { return UserList_1.UserList; } });
var UserShow_1 = require("./views/UserShow");
Object.defineProperty(exports, "UserShow", { enumerable: true, get: function () { return UserShow_1.UserShow; } });
var CollectionView_1 = require("./views/CollectionView");
Object.defineProperty(exports, "CollectionView", { enumerable: true, get: function () { return CollectionView_1.CollectionView; } });
var View_1 = require("./views/View");
Object.defineProperty(exports, "View", { enumerable: true, get: function () { return View_1.View; } });
/* Usage example to render a list of users in the root element */
const UserList_2 = require("./views/UserList");
const Collection_2 = require("./models/Collection");
const User_2 = require("./models/User");
const users = new Collection_2.Collection('http://localhost:3000/users', (json) => {
    return User_2.User.buildUser(json);
});
users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList_2.UserList(root, users).render();
    }
});
users.fetch();
/*
@ update data

import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const root = document.getElementById('root');

const user = User.buildUser({ name: 'American Airlines', age: 45 });

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error(`Root element not found`);
}
*/
