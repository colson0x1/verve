/* Exporting models */
export { User, UserProps } from './models/User';
export { Collection } from './models/Collection';
export { ApiSync } from './models/ApiSync';
export { Attributes } from './models/Attributes';
export { Model } from './models/Model';
export { Eventing } from './models/Eventing';

/* Exporting views */
export { UserEdit } from './views/UserEdit';
export { UserForm } from './views/UserForm';
export { UserList } from './views/UserList';
export { UserShow } from './views/UserShow';
export { CollectionView } from './views/CollectionView';
export { View } from './views/View';

/* Usage example to render a list of users in the root element */
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  },
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
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
