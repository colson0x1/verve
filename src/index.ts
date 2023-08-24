import { User } from './models/User';

const user = new User({ name: 'Colson Downtown LA', age: 33 });

user.on('change', () => {
  console.log('changed yay');
});
