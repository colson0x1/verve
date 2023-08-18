import { User } from './models/User';

const user = new User({ name: 'Colson', age: 24 });

user.on('change', () => {});
user.on('dope', () => {});
user.on('awsm', () => {});

console.log(user);
