"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Model_1 = require("./Model");
const Attributes_1 = require("./Attributes");
const ApiSync_1 = require("./ApiSync");
const Eventing_1 = require("./Eventing");
const Collection_1 = require("./Collection");
const rootUrl = 'http://localhost:3000/users';
class User extends Model_1.Model {
    static buildUser(attrs) {
        return new User(new Attributes_1.Attributes(attrs), new Eventing_1.Eventing(), new ApiSync_1.ApiSync(rootUrl));
    }
    static buildUserCollection() {
        return new Collection_1.Collection(rootUrl, (json) => User.buildUser(json));
    }
    setRandomAge() {
        const age = Math.round(Math.random() * 50);
        this.set({ age });
    }
}
exports.User = User;
