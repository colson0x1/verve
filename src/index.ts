import { User } from './models/User';

const user = new User({ name: 'Colson Downtown LA', age: 33 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');
