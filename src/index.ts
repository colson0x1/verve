import { UserForm } from './views/UserForm';

const rootElement = document.getElementById('root');

if (rootElement) {
  const userForm = new UserForm(rootElement);
  userForm.render();
} else {
  console.error(`Element with id 'root' not found in the DOM.`);
}
