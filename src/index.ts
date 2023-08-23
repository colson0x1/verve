import { User } from './models/User';

const user = new User({ name: 'Colson Downtown LA', age: 33 });

user.events.on('change', () => {
  console.log('change event!!');
});

user.events.trigger('change');
