import { User } from './models/User';

const user = new User({ name: 'Colson', age: 24 });

user.on('change', () => {
  console.log('change event was triggered');
});
user.on('dope', () => {
  console.log('dope event was triggered');
});
user.on('awsm', () => {
  console.log('awsm event was triggered');
});

user.trigger('awsm');
