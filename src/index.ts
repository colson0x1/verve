import { UserForm } from './views/UserForm';
import { User } from './models/User';

const rootElement = document.getElementById('root');

if (rootElement) {
  const user = User.buildUser({ name: 'Airlines', age: 45 });
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  console.error(`Element with id 'root' not found in the DOM.`);
}
