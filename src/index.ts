import { User } from './models/User';

const user = new User({ name: 'Colson', age: 24 });

console.log(user.get('name'));
console.log(user.get('age'));
